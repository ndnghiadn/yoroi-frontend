// @flow

// $FlowFixMe[cannot-resolve-module]
import crc8 from 'crc/crc8'; // eslint-disable-line import/no-unresolved
import type { TokenInfoMap } from '../toplevel/TokenInfoStore';
import type {
  TokenLookupKey, TokenEntry,
} from '../../api/common/lib/MultiToken';
import type { TokenRow, TokenMetadata } from '../../api/ada/lib/storage/database/primitives/tables';
import { isHexadecimal } from 'validator';
import AssetFingerprint from '@emurgo/cip14-js';

export function getTokenName(
  tokenRow: $ReadOnly<{
    Identifier: string,
    IsDefault: boolean,
    IsNFT?: boolean,
    Metadata: TokenMetadata,
    ...,
  }>,
): string {
  const strictName = getTokenStrictName(tokenRow).name;
  if (strictName != null) return strictName;
  const identifier = getTokenIdentifierIfExists(tokenRow);
  if (identifier != null) return identifier;
  return '-';
}

const ASCII_ASSET_NAME_BLACKLIST =
  new Set<void | string>(['ADA']);

function hexToValidAsciiOrNothing(hexString: string): void | string {
  const bytes = [...Buffer.from(hexString, 'hex')];
  const isAscii = bytes.every(b => b >= 32 && b < 127);
  return isAscii ? String.fromCharCode(...bytes) : undefined;
}

/**
 * https://github.com/cardano-foundation/CIPs/tree/master/CIP-0067
 */
function getCip67Tag(assetNameHEX: string): {| hexName: string, tag: ?string |} {
  const bytes = Buffer.from(assetNameHEX, 'hex');
  // [ 0000 | 16 bits label_num | 8 bits checksum | 0000 ]
  if (bytes.length >= 4) {
    const [a, b, c, d] = bytes;
    // check 4-zero-bit brackets
    if ((a & 0b11110000) === 0 && (d & 0b00001111) === 0) {
      /*
       * The 3 significant bytes are encoded within 4 bytes as:
       * (0000 xxxx) (xxxx yyyy) (yyyy zzzz) (zzzz 0000)
       */
      const middleByte = (byte1, byte2) => ((byte1 & 0b1111) << 4) | ((byte2 & 0b11110000) >> 4)
      const xByte = middleByte(a, b);
      const yByte = middleByte(b, c);
      const zByte = middleByte(c, d);
      if (crc8([xByte, yByte]) === zByte) {
        return {
          tag: String((xByte << 8) | yByte),
          hexName: bytes.subarray(4).toString('hex'),
        };
      }
    }
  }
  return {
    tag: null,
    hexName: assetNameHEX,
  };
}

function decodeAssetNameIfASCII(assetName: ?string): {| ascii: ?string, cip67Tag: ?string |} {
  if (assetName == null || assetName.length === 0 || !isHexadecimal(assetName)) {
    return { ascii: null, cip67Tag: null };
  }
  const { tag, hexName } = getCip67Tag(assetName);
  const asciiName = hexToValidAsciiOrNothing(hexName);
  if (asciiName == null || ASCII_ASSET_NAME_BLACKLIST.has(asciiName)) {
    return { ascii: null, cip67Tag: tag };
  }
  return { ascii: asciiName, cip67Tag: tag };
}

export function assetNameFromIdentifier(identifier: string): string {
  const [, name ] = identifier.split('.');
  return decodeAssetNameIfASCII(name).ascii ?? name;
}

export function getTokenStrictName(
  tokenRow: $ReadOnly<{
    Identifier: string,
    Metadata: TokenMetadata,
    ...,
  }>,
): {| name: ?string, cip67Tag: ?string |} {
  if (tokenRow.Metadata.ticker != null) {
    return { name: tokenRow.Metadata.ticker, cip67Tag: null };
  }
  if (tokenRow.Metadata.longName != null) {
    return { name: tokenRow.Metadata.longName, cip67Tag: null };
  }
  if (tokenRow.Metadata.type === 'Cardano') {
    const assetName = tokenRow.Metadata.assetName;
    const maybeAsciiName = decodeAssetNameIfASCII(assetName);
    if (maybeAsciiName.ascii != null) {
      return { name: maybeAsciiName.ascii, cip67Tag: maybeAsciiName.cip67Tag };
    }
    return { name: assetName, cip67Tag: null };
  }
  return { name: null, cip67Tag: null };
}

export function getTokenIdentifierIfExists(
  tokenRow: $ReadOnly<{
    Identifier: string,
    IsDefault: boolean,
    IsNFT?: boolean,
    Metadata: TokenMetadata,
    ...,
  }>
): void | string {
  if (tokenRow.IsDefault) return undefined;
  if (tokenRow.Metadata.type === 'Cardano') {
    const { policyId, assetName } = tokenRow.Metadata;
    const assetFingerprint = new AssetFingerprint(
      Buffer.from(policyId, 'hex'),
      Buffer.from(assetName, 'hex')
    );
    return assetFingerprint.fingerprint();
  }

  return tokenRow.Identifier;
}

export function genLookupOrFail(
  map: TokenInfoMap,
): ($ReadOnly<Inexact<TokenLookupKey>> => $ReadOnly<TokenRow>) {
  return (lookup: $ReadOnly<Inexact<TokenLookupKey>>): $ReadOnly<TokenRow> => {
    const tokenRow = map
      .get(lookup.networkId.toString())
      ?.get(lookup.identifier);
    if (tokenRow == null) throw new Error(`${nameof(genLookupOrFail)} no token info for ${JSON.stringify(lookup)}`);
    return tokenRow;
  };
}

export function genLookupOrNull(
  map: TokenInfoMap,
): ($ReadOnly<Inexact<TokenLookupKey>> => $ReadOnly<TokenRow> | null) {
  return (lookup: $ReadOnly<Inexact<TokenLookupKey>>): $ReadOnly<TokenRow> | null => {
    const tokenRow = map
      .get(lookup.networkId.toString())
      ?.get(lookup.identifier);
    if (tokenRow == null) return null
    return tokenRow;
  };
}
export function genFormatTokenAmount(
  getTokenInfo: $ReadOnly<Inexact<TokenLookupKey>> => $ReadOnly<TokenRow>
): (TokenEntry => string) {
  return (tokenEntry) => {
    const tokenInfo = getTokenInfo(tokenEntry);

    return tokenEntry.amount
      .shiftedBy(-tokenInfo.Metadata.numberOfDecimals)
      .decimalPlaces(tokenInfo.Metadata.numberOfDecimals)
      .toString();
  };
}

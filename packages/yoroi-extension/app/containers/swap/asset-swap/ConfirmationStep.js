//@flow
import { Box, Typography } from '@mui/material';
import { ReactComponent as InfoIcon } from '../../../assets/images/revamp/icons/info.inline.svg';
import TextField from '../../../components/common/TextField';
import { useSwapForm } from '../context/swap-form';
import { AssetAndAmountRow } from '../../../components/swap/SelectAssetDialog';
import { useSwap } from '@yoroi/swap';
import SwapPoolIcon from '../../../components/swap/SwapPoolIcon';
import SwapPoolFullInfo from './edit-pool/PoolFullInfo';
import { useSwapFeeDisplay } from '../hooks';
import type { PriceImpact } from '../../../components/swap/types';
import type { RemoteTokenInfo } from '../../../api/ada/lib/state-fetch/types';
import {
  FormattedActualPrice,
  FormattedMarketPrice,
  PriceImpactBanner,
  PriceImpactColored, PriceImpactIcon,
  PriceImpactPercent
} from '../../../components/swap/PriceImpact';

type Props = {|
  slippageValue: string,
  priceImpactState: ?PriceImpact,
  defaultTokenInfo: RemoteTokenInfo,
  getFormattedPairingValue: (amount: string) => string,
|};

export default function SwapConfirmationStep({
  slippageValue,
  priceImpactState,
  defaultTokenInfo,
  getFormattedPairingValue,
}: Props): React$Node {

  const {
    orderData: {
      selectedPoolCalculation: { pool },
      bestPoolCalculation: { pool: bestPool },
    },
  } = useSwap();
  const { sellTokenInfo, buyTokenInfo, sellQuantity, buyQuantity } = useSwapForm();
  const { ptAmount, formattedPtAmount, formattedNonPtAmount } = useSwapFeeDisplay(defaultTokenInfo);

  const isAutoPool = pool?.poolId === bestPool?.poolId;

  return (
    <Box width="100%" mx="auto" maxWidth="506px" display="flex" flexDirection="column" gap="24px">
      <Box textAlign="center">
        <Typography component="div" variant="h4" fontWeight={500}>
          Confirm swap transaction
        </Typography>
      </Box>
      <Box display="flex" gap="16px" flexDirection="column">
        <Box>
          <Box>
            <Typography component="div" variant="body1" color="grayscale.500">
              Swap From
            </Typography>
          </Box>
          <Box>
            <AssetAndAmountRow
              asset={sellTokenInfo}
              displayAmount={sellQuantity.displayValue}
              type="from"
              defaultTokenInfo={defaultTokenInfo}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography component="div" variant="body1" color="grayscale.500">
              Swap To
            </Typography>
          </Box>
          <Box>
            <Box>
              <AssetAndAmountRow
                asset={buyTokenInfo}
                displayAmount={buyQuantity.displayValue}
                type="from"
                defaultTokenInfo={defaultTokenInfo}
                priceImpactState={priceImpactState}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <PriceImpactBanner priceImpactState={priceImpactState} />

      <Box display="flex" gap="8px" flexDirection="column">
        <SummaryRow col1="Dex">
          <Box display="flex" alignItems="center" gap="8px">
            <Box display="inline-flex">
              <SwapPoolIcon provider={pool?.provider} />
            </Box>
            <Typography component="div" variant="body1" color="primary.500" fontWeight={500}>
              {pool?.provider} {isAutoPool ? '(Auto)' : null}
            </Typography>
          </Box>
        </SummaryRow>
        <SummaryRow col1="Slippage tolerance" withInfo>
          {slippageValue}%
        </SummaryRow>
        <SwapPoolFullInfo defaultTokenInfo={defaultTokenInfo} />
        {priceImpactState && (
          <>
            <SummaryRow col1="Market price" withInfo>
              <FormattedMarketPrice />
            </SummaryRow>
            <SummaryRow col1="Price impact" withInfo>
              <PriceImpactColored priceImpactState={priceImpactState} sx={{ display: 'flex' }}>
                <PriceImpactIcon isSevere={priceImpactState.isSevere} />
                <PriceImpactPercent />
              </PriceImpactColored>
            </SummaryRow>
            <SummaryRow col1="">
              <PriceImpactColored priceImpactState={priceImpactState}>
                (<FormattedActualPrice />)
              </PriceImpactColored>
            </SummaryRow>
          </>
        )}
        <Box p="16px" bgcolor="#244ABF" borderRadius="8px" color="common.white">
          <Box display="flex" justifyContent="space-between">
            <Box>Total</Box>
            <Box>
              <Typography component="div" fontSize="20px" fontWeight="500">
                {formattedNonPtAmount ?? formattedPtAmount}
              </Typography>
            </Box>
          </Box>
          {formattedNonPtAmount && (
            <Box display="flex" justifyContent="right">
              <Box>
                <Typography component="div" fontSize="20px" fontWeight="500">
                  {formattedPtAmount}
                </Typography>
              </Box>
            </Box>
          )}
          <Box display="flex" justifyContent="right">
            <Typography component="div" variant="body1">
              {getFormattedPairingValue(ptAmount)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <TextField
          className="walletPassword"
          value=""
          label="Password"
          type="password"
          // {...walletPasswordField.bind()}
          // done={walletPasswordField.isValid}
          // error={walletPasswordField.error}
        />
      </Box>
    </Box>
  );
}

const SummaryRow = ({ col1, children, withInfo = false }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <Box display="flex" alignItems="center">
      <Typography component="div" variant="body1" color="grayscale.500">
        {col1}
      </Typography>
      {withInfo ? (
        <Box ml="8px">
          <InfoIcon />
        </Box>
      ) : null}
    </Box>
    <Box>
      <Typography component="div" variant="body1">
        {children}
      </Typography>
    </Box>
  </Box>
);

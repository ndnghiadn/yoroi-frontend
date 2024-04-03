//@flow
import type { Node } from 'react';
import { useSwap } from '@yoroi/swap';
import { useSwapForm } from '../../context/swap-form';
import SwapInput from '../../../../components/swap/SwapInput';
import type { RemoteTokenInfo } from '../../../../api/ada/lib/state-fetch/types';
import { Box } from '@mui/material';

type Props = {|
  defaultTokenInfo: RemoteTokenInfo,
  onAssetSelect(): void,
|};

export default function EditSellAmount({ onAssetSelect, defaultTokenInfo }: Props): Node {
  const { orderData } = useSwap();
  const {
    sellQuantity: { isTouched: isSellTouched, displayValue: sellDisplayValue, error },
    sellTokenInfo = {},
    onChangeSellQuantity,
    sellFocusState,
  } = useSwapForm();
  const { tokenId } = orderData.amounts.sell;
  console.log('sellTokenInfo tokenId', sellTokenInfo);
  return (
    <Box>
      <SwapInput
        key={tokenId}
        label="Swap From"
        handleAmountChange={onChangeSellQuantity}
        value={sellDisplayValue}
        tokenInfo={sellTokenInfo}
        defaultTokenInfo={defaultTokenInfo}
        onAssetSelect={onAssetSelect}
        touched={isSellTouched}
        focusState={sellFocusState}
        error={error}
        showMax
      />
    </Box>
  );
}

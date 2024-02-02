// @flow
import type { Node } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as ChevronDownIcon } from '../../assets/images/revamp/icons/chevron-down.inline.svg';
import { ReactComponent as DefaultTokenImage } from '../../assets/images/revamp/token-default.inline.svg';
import type { AssetAmount } from './types';

type Props = {|
  label: string,
  amount: AssetAmount,
  onAssetSelect: function,
  handleAmountChange: function,
  showMax?: boolean,
  value?: string,
  touched?: boolean,
  inputRef?: any | null,
  error: string | null,
|};

export default function SwapInput({
  label,
  showMax = false,
  onAssetSelect,
  error = '',
  handleAmountChange,
  value,
  amount,
}: Props): Node {
  const { amount: quantity = undefined, ...rest } = amount;

  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = e => {
    handleAmountChange(e.target.value);
    setInputValue(e.target.value);
  };

  const isFocusedColor = isFocused ? 'grayscale.max' : 'grayscale.400';

  return (
    <Box>
      <Box
        component="fieldset"
        sx={{
          borderStyle: 'solid',
          borderWidth: isFocused || error ? '2px' : '1px',
          borderColor: error ? 'magenta.500' : isFocusedColor,
          borderRadius: '8px',
          p: '16px',
          pr: '8px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: '1fr 1fr',
          justifyContent: 'start',
          position: 'relative',
          bgcolor: 'common.white',
          columnGap: '6px',
          rowGap: '8px',
        }}
      >
        <Box
          component="legend"
          sx={{
            top: '-9px',
            left: '16px',
            position: 'absolute',
            px: '4px',
            bgcolor: 'common.white',
            color: error ? 'magenta.500' : 'black',
          }}
        >
          {label}
        </Box>

        <Typography
          sx={{
            appearance: 'none',
            border: '0',
            outline: 'none',
            '::placeholder': { color: 'grayscale.600' },
          }}
          component="input"
          type="text"
          variant="body1"
          color="grayscale.max"
          placeholder="0"
          onChange={handleChange}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Box sx={{ justifySelf: 'end', cursor: 'pointer' }} onClick={onAssetSelect}>
          <Box height="100%" width="min-content" display="flex" gap="8px" alignItems="center">
            <Box
              width="24px"
              height="24px"
              sx={{ overflowY: 'hidden', '& > svg': { width: '100%', height: '100%' } }}
            >
              {rest.image ? (
                <img src={rest.image} alt="" width="100%" /> || <DefaultTokenImage />
              ) : (
                <DefaultTokenImage />
              )}
            </Box>
            <Box width="max-content">{rest.ticker || 'Select asset'}</Box>
            <Box display="inline-flex">
              <ChevronDownIcon />
            </Box>
          </Box>
        </Box>
        {!error && showMax ? (
          <Box>
            <Typography
              component="button"
              variant="caption"
              fontWeight={500}
              sx={{ p: '4px 8px', bgcolor: 'grayscale.50', borderRadius: '8px' }}
              onClick={() => {
                setInputValue(quantity);
                // handleAmountChange(quantity);
              }}
            >
              MAX
            </Typography>
          </Box>
        ) : (
          <Box minHeight="31px" />
        )}
        <Box sx={{ justifySelf: 'end', alignSelf: 'end' }}>
          <Typography component="div" variant="caption" color="grayscale.600">
            Current balance: {quantity || 0} {rest.ticker}
          </Typography>
        </Box>
      </Box>
      {error && (
        <Typography component="div" pt="4px" variant="caption" color="magenta.500">
          {error}
        </Typography>
      )}
    </Box>
  );
}
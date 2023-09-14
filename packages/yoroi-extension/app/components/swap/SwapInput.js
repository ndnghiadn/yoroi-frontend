import { useState } from 'react';
import { Box, Input, Typography } from '@mui/material';
import { ReactComponent as ChevronIcon } from '../../assets/images/revamp/chevron-icon.inline.svg';
import { ReactComponent as TokenImage } from './img.inline.svg';

export default function SwapInput({
  label,
  isFrom = false,
  showMax = false,
  asset = {},
  isLoading,
}) {
  const { amount, ticker } = asset;
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    if (e.target.value === '') {
      setError('');
      setInputValue('');
      return;
    }

    const val = Number(e.target.value);
    const checkAmount = isFrom ? amount : Infinity;

    if (val !== 0 && val > checkAmount) {
      setError('Not enough balance');
    } else if (Number.isNaN(val)) {
      setError('Invalid amount');
    }

    setInputValue(e.target.value);
  };

  return (
    <Box>
      <Box
        component="fieldset"
        sx={{
          border: '1px solid',
          borderColor: error ? '#FF1351' : 'gray.400',
          borderRadius: '8px',
          p: '16px',
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
            color: error ? '#FF1351' : 'black',
          }}
        >
          {label}
        </Box>

        <Typography
          sx={{
            appearance: 'none',
            border: '0',
            outline: 'none',
          }}
          component="input"
          type="text"
          variant="body1"
          color="#6B7384"
          placeholder="0"
          onChange={handleChange}
          value={inputValue}
        />
        <Box sx={{ justifySelf: 'end', cursor: 'pointer' }}>
          <Box height="100%" width="min-content" display="flex" gap="8px" alignItems="center">
            <Box>
              <TokenImage />
            </Box>
            <Box>{ticker}</Box>
            <Box>
              <ChevronIcon />
            </Box>
          </Box>
        </Box>
        {!error && showMax ? (
          <Box>
            <Typography
              component="button"
              variant="caption"
              fontWeight={500}
              sx={{ p: '4px 8px', bgcolor: '#F0F3F5', borderRadius: '8px' }}
              onClick={() => setInputValue(amount)}
            >
              MAX
            </Typography>
          </Box>
        ) : (
          <Box />
        )}
        <Box sx={{ alignSelf: 'end' }}>
          <Typography variant="caption" color="#6B7384">
            Current balance: {amount} {ticker}
          </Typography>
        </Box>
      </Box>
      {error && (
        <Typography pt="4px" variant="caption" color="#FF1351">
          {error}
        </Typography>
      )}
    </Box>
  );
}

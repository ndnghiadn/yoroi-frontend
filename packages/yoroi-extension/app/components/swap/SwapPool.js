import { Box, Input, Typography } from '@mui/material';
import { ReactComponent as ChevronIcon } from '../../assets/images/revamp/chevron-icon.inline.svg';
import { ReactComponent as InfoIcon } from '../../assets/images/revamp/info-icon.inline.svg';
import { ReactComponent as PoolImage } from './pool.inline.svg';
import { useState } from 'react';

export default function SwapPool({ assets, isLoading }) {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const handleShowFullInfo = () => setShowFullInfo(p => !p);

  const [asset1, asset2] = assets;

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'gray.400',
        borderRadius: '8px',
        position: 'relative',
        bgcolor: 'common.white',
        p: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '8px',
        }}
        onClick={handleShowFullInfo}
      >
        <Box>
          <PoolImage />
        </Box>
        <Typography variant="body1" fontWeight={500} color="#4B6DDE">
          Minswap (Auto)
        </Typography>
        <Box flexGrow="1" flexShrink="0" display="flex" alignItems="center" gap="4px">
          <Box>Total:</Box>
          <Box>
            {asset2.amount} {asset2.ticker}
          </Box>
          <Box>+</Box>
          <Box>
            {asset1.amount} {asset1.ticker}
          </Box>
        </Box>
        <Box sx={{ transform: showFullInfo ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronIcon />
        </Box>
      </Box>
      {showFullInfo && (
        <Box sx={{ display: 'flex', flexFlow: 'column', gap: '8px', mt: '8px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box color="#8A92A3" display="flex" alignItems="center" gap="8px">
              Min ADA <InfoIcon />
            </Box>
            <Box>0 ADA</Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box color="#8A92A3" display="flex" alignItems="center" gap="8px">
              Minimum assets received <InfoIcon />
            </Box>
            <Box>0 ADA</Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box color="#8A92A3" display="flex" alignItems="center" gap="8px">
              Fees <InfoIcon />
            </Box>
            <Box>0 ADA</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

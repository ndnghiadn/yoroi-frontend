import React from 'react';
import { Button, Typography } from '@mui/material';

const NavigationButton = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      sx={(theme: any) => ({
        maxHeight: '40px',
        minWidth: '140.25px',

        '&.MuiButton-contained': {
          backgroundColor: theme.palette.ds.el_primary_medium,
          color: theme.palette.ds.el_static_white,

          '&:hover': {
            backgroundColor: theme.palette.ds.el_primary_high,
          },
        },

        '&.MuiButton-secondary': {
          color: theme.palette.ds.text_primary_medium,
        },
        ...props.sx,
      })}
    >
      {/* @ts-ignore */}
      <Typography variant="button2">{label}</Typography>
    </Button>
  );
};

export default NavigationButton;

import React from 'react';
import { Input, InputAdornment, InputProps } from '@mui/material';
import { useRef } from 'react';
import { Icon } from './../icons/index';

export const SearchInput = (props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <Input
      inputRef={ref}
      disableUnderline
      startAdornment={
        <InputAdornment
          position="start"
          onClick={focusInput}
          sx={(theme: any) => ({
            '&:hover': {
              cursor: 'pointer',
            },

            '& > svg > g > use': {
              fill: theme.palette.ds.gray_c900,
            },
          })}
        >
          <Icon.Search />
        </InputAdornment>
      }
      sx={(theme: any) => ({
        borderRadius: `${theme.shape.borderRadius}px`,
        width: '320px',
        height: '40px',
        padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(1)}`,
        border: '1px solid',
        borderColor: theme.palette.ds.gray_c400,
        'input::placeholder': {
          color: theme.palette.ds.gray_c600,
        },
        ...props.sx,
      })}
      {...props}
    />
  );
};

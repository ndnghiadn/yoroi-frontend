// @flow

const RevampOutlinedInput = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingRight: '16px',
      height: '56px',
      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.grayscale[900] },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grayscale[400],
        borderRadius: 8,
        backgroundColor: 'transparent',
        letterSpacing: 'initial',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grayscale[900],
        border: '2px solid',
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grayscale[200],
        backgroundColor: 'transparent',
        color: theme.palette.grayscale[200],
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.magenta[500] },
      '& .MuiOutlinedInput-input': {
        '&.Mui-disabled': {
          color: theme.palette.grayscale[200],
          WebkitTextFillColor: theme.palette.grayscale[200],
        },
      },
      '& svg': { color: theme.palette.grayscale[400] },
      '&.Mui-focused svg': { color: theme.palette.grayscale[600] },
      '&.Mui-disabled svg': { color: theme.palette.grayscale[200] },
    }),
  },
};
export { RevampOutlinedInput };

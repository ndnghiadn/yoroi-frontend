import React from 'react';
import { TableHead, TableRow, TableCell, Stack, Typography } from '@mui/material';
import { Icon } from '../../../../components/icons';
import { useTheme } from '@mui/material/styles';
import { IHeadCell } from '../types/table';

interface Props {
  headCells: IHeadCell[];
  order: string | null;
  orderBy: string | null;
  onRequestSort: (id: string) => void;
}

const SortableTableHead = ({ headCells, order, orderBy, onRequestSort }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ label, align, id, isPadding, disabledSort }) => {
          return (
            <TableCell key={id} align={align} sx={{ padding: `12.5px ${theme.spacing(2)}` }}>
              {/* @ts-ignore */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={theme.spacing(1)}
                onClick={() => (isPadding ? null : disabledSort ? null : onRequestSort(id))}
                sx={{
                  float: align,
                  cursor: isPadding || disabledSort ? 'normal' : 'pointer',
                  justifyContent: isPadding ? 'space-between' : 'flex-start',
                  width: isPadding ? '100%' : 'fit-content',
                }}
              >
                <Typography variant="body2" color="ds.gray_c600" sx={{ userSelect: 'none' }}>
                  {label}
                </Typography>
                {disabledSort ? null : (
                  <Icon.Sort
                    id={id}
                    order={order}
                    orderBy={orderBy}
                    style={{ cursor: 'pointer' }}
                    onClick={() => (isPadding ? onRequestSort(id) : null)}
                  />
                )}
              </Stack>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default SortableTableHead;

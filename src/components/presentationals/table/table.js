import React, {useEffect} from 'react'
import { Box,  Paper } from '@mui/material';
import TableToolbar from './tableToolbar/tableToolbar';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableHeader from './tableHeader/tableHeader';
import TableBody from './tableBody/tableBody';
import TablePagination from './tablePagination/tablePagination';

function isNullOrUndefined(value) {
    return (
        // null or undefined
        (value == null) ||

        // has length and it's zero
        (value.hasOwnProperty('length') && value.length === 0) ||

        // is an Object and has no keys
        (value.constructor === Object && Object.keys(value).length === 0)
    )
}

function Table(props) {
  const { rows, order, orderBy, onSortClick} = props;

  useEffect(() => {
    sortedRows()
  }, [])
  

  useEffect (() => {  
    sortedRows()
  }, [order])

  const sortedRows = () => {
    // mutate or change rows props sort order
      return (
          rows.sort(function (result_a, result_b) {
              let res_a = result_a[orderBy]
              let res_b = result_b[orderBy]

              if (!isNullOrUndefined(res_a) && !isNullOrUndefined(res_b)) {
                  res_a = res_a.toString().toLowerCase()
                  res_b = res_b.toString().toLowerCase()
              }

              if (order === 'asc') {
                  if (res_a < res_b) return -1;
                  if (res_a > res_b) return 1;
                  return 0;
              } else {
                  if (res_a > res_b) return -1;
                  if (res_a < res_b) return 1;
                  return 0;
              }
          })
      )
  }

  const handleSortHeaderClick = async (headerCellId) => {
    await onSortClick(headerCellId)
  }

  return (
    <Box sx={{ width: '100%' }}>
        <Paper sx={{ 
            width: '100%', 
            flexGrow: 1, 
            borderRadius: '10px', 
            minHeight: '510px', 
            mt: 3,
            mr: 2,
          }} elevation={20}> 
            { !props.tableOnly && <TableToolbar {...props} />}
            <TableContainer sx={{ maxHeight: 400 }}>
              <MuiTable sx={{ minWidth: 750 }} aria-labelledby={`table-${props.label}`} size="small" stickyHeader>
                <TableHeader  {...props} onSortHeaderClick={handleSortHeaderClick}/>
                <TableBody {...props} />
              </MuiTable>
            </TableContainer>
            <TablePagination {...props} />
        </Paper> 
    </Box>
  )
}

export default Table
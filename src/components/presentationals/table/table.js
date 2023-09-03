import React from 'react'
import { Box,  Paper } from '@mui/material';
import TableToolbar from './tableToolbar/tableToolbar';
import TableContainer from '@mui/material/TableContainer';
import MuiTable from '@mui/material/Table';
import TableHeader from './tableHeader/tableHeader';
import TableBody from './tableBody/tableBody';

function Table(props) {
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
            <TableContainer>
              <MuiTable sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
                <TableHeader  {...props}/>
                <TableBody {...props}/>
              </MuiTable>
              
            </TableContainer>
        </Paper> 
    </Box>
  )
}

export default Table
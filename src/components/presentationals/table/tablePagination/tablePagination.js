import React from 'react'
import Pagination from '@mui/material/TablePagination';
import {rowsPerPageOptions} from '../../../../common/constants'

function TablePagination(props) {
const {onPageChange, onRowsPerPageChange, rows, rowsPerPage, page,  } = props;

  return (
    <Pagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
  )
}

export default TablePagination
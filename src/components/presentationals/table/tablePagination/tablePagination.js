import React from 'react'
import Pagination from '@mui/material/TablePagination';
import {rowsPerPageOptions, flexDirections, skeletonSizes, skeletonTypes} from '../../../../common/constants'
import Skeleton from '../../skeleton/skeleton';
import Box from '@mui/material/Box';

function TablePagination(props) {
const {isLoading, onPageChange, onRowsPerPageChange, rows, rowsPerPage, page,  } = props;

  return (
    <>
    {isLoading ? 
    <Box  sx={{ pr: 4}}>
      <Skeleton size={skeletonSizes.medium} type={skeletonTypes.text} flexDirection={flexDirections.rowReverse}/>
    </Box>
    :
    <Pagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
  }
    </>
  )
}

export default TablePagination
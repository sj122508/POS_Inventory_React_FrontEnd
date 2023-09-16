import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Skeleton from '../../skeleton/skeleton';
import { visuallyHidden } from '@mui/utils';
import { skeletonSizes, skeletonTypes } from '../../../../common/constants'

function TableHeader(props) {
    const { 
        headerCells,
        isLoading,
        label,
        numberSelected, 
        rowCount, 
        order, 
        orderBy,
        onSelectAllClick, 
        onSortHeaderClick,
        tableOnly,
     } = props;


     const handleSortClick = (headerCellId) => {
        onSortHeaderClick(headerCellId)
     }

    const populateColumnLabel = () => {
       
        // If loading then show skeleton
         if (isLoading) {
            return (
                    headerCells.map((headerCell) => ( 
                        <TableCell key={headerCell.id} padding={'normal'}>
                            <Skeleton size={skeletonSizes.large} type={skeletonTypes.text} />
                        </TableCell>
                    ))
            )
        }

        return (    
                headerCells.map((headerCell) => ( 
                    headerCell.id !== "id" &&  
                        <TableCell
                            key={headerCell.id}
                            align={headerCell.numeric ? 'right' : 'left'}
                            padding={headerCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headerCell.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === headerCell.id}
                                direction={orderBy === headerCell.id ? order : 'asc'}
                                onClick={(e) => handleSortClick(headerCell.id)}
                                sx={{
                                    color: "#616161",
                                    '&.Mui-active': {
                                        color: '#474747',
                                    }, 
                                    fontWeight: 'bold', 
                                }}
                            >
                                {headerCell.label}
                                {orderBy === headerCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                ))
        )
    }

    const populateColumnCheckbox = () => {
        
        // If loading then show skeleton
        if (isLoading) {
            return (
                <TableCell width= '60px'  >
                    <Skeleton size={skeletonSizes.small} type={skeletonTypes.text} />
                </TableCell>
            )
        }

        return (
            !tableOnly && 
                <TableCell padding="checkbox">
                    <Checkbox 
                        color="primary"
                        indeterminate={numberSelected > 0 && numberSelected < rowCount}
                        checked={rowCount > 0 && numberSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': "select all " + label,
                        }}
                    />
                </TableCell>
            
        )
    }

    const populateColumnEdit = () => {
         return (
            !tableOnly && 
                <TableCell padding="none">
                </TableCell>
            
        )
    }

  return (
    <TableHead>
        <TableRow>
            {populateColumnCheckbox()}
            {populateColumnLabel()}
            {populateColumnEdit()}
        </TableRow>
    </TableHead>
  )
}

export default TableHeader
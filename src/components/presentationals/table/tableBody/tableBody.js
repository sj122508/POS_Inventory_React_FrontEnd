

import MUITableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Skeleton from '../../skeleton/skeleton';
import { skeletonSizes, skeletonTypes, placements } from '../../../../common/constants';
import Tooltip from '../../tooltip/tooltip'

function TableBody(props) {
    const { headerCells, isLoading, onRowClick, onEditClick, rows, selected, tableOnly } = props;

    const isSelected = (id) => {
        return selected.find(row => row.id === id) !== undefined;
    }

    const populateCells = (row) => {
        return headerCells.map((cell, index) => {

            if (cell.id === "id") return null; // do not display id column

            let rowCellName = Object.keys(row)[index]

            return (
                <Tooltip title={row[rowCellName]} key={rowCellName} placement={cell.numeric ? placements.bottomEnd : placements.bottomStart}>
                <TableCell 
                    align= {cell.numeric ? placements.right : placements.left}
                    key={rowCellName}
                    sx={{color: "#616161" }}
                    >
                        {row[rowCellName]}
                    
                </TableCell>
                </Tooltip>
            )
        })
    }

    const populateCellsCheckbox = (row) => {
        const isItemSelected = isSelected(row.id);
        return (
             !tableOnly &&                 
                <TableCell padding="checkbox">
                    <Checkbox color="primary"
                        checked={isItemSelected}
                        inputProps={{
                        'aria-labelledby': `table-checkbox-${row.name}`,
                        }}
                    />
                </TableCell>
        )
    
    }

    const populateCellsEdit = (row) => {

        return (
            !tableOnly && 
                <TableCell align="center">
                    <IconButton aria-label={`table-edit-${row.name}`} onClick={() => onEditClick(row)}>
                        <EditIcon fontSize='small'/>
                    </IconButton>
                </TableCell> 
        )
    }

    const populateSkeleton = () => {
        return (
            <>
                <TableCell width='60px' ><Skeleton size={skeletonSizes.small} type={skeletonTypes.text} /></TableCell>
                {
                    headerCells.map((cell) => {

                    if (cell.id === "id") return null; // do not display id column
                    
                    return (<TableCell key={cell}  padding='normal' >
                        <Skeleton size={skeletonSizes.large} type={skeletonTypes.text} />
                    </TableCell>)
                 })
                }
                <TableCell width='60px' ><Skeleton size={skeletonSizes.small} type={skeletonTypes.text} /></TableCell>
            </>
        )
    }

  return (
    <MUITableBody>
        {rows.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            return (
                <TableRow 
                    hover
                    onClick={(event) => onRowClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                >
                   
                   {isLoading ? 
                    <>
                        {populateSkeleton()}
                    </>   
                    :
                    <>
                        {populateCellsCheckbox(row)}
                        {populateCells(row)}
                        {populateCellsEdit(row)}
                    </>
                }
                </TableRow>
            )
        })}
    </MUITableBody>
  )
}

export default TableBody
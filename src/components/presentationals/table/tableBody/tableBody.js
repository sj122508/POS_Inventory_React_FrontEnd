

import MUITableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


function TableBody(props) {
    const { headerCells, onRowClick, onEditClick, rows, selected, tableOnly, sortedRows } = props;

    const isSelected = (id) => {
        return selected.find(row => row.id === id) !== undefined;
    }

    const populateCells = (row) => {
        return headerCells.map((cell, index) => {

            if (cell.id === "id") return null; // do not display id column

            var rowCellName = Object.keys(row)[index]

            return (
                <TableCell 
                    align= {cell.numeric ? 'right' : 'left'}
                    key={row[rowCellName]}
                    sx={{color: "#616161" }}
                    >
                        {row[rowCellName]}
                    
                </TableCell>
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
                   
                    {populateCellsCheckbox(row)}
                    {populateCells(row)}
                    {populateCellsEdit(row)}
                    
                </TableRow>
            )
        })}
    </MUITableBody>
  )
}

export default TableBody
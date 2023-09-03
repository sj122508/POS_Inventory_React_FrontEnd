

import MUITableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

function TableBody(props) {
    const { headerCells, onRowClick, rows, selected, tableOnly } = props;

    const isSelected = (id) => {
        return selected.find(row => row.id === id) !== undefined;
    }

    const populateCells = (row) => {
        return headerCells.map((cell, index) => {

            if (cell.id === "id") return null;

            var rowCellName = Object.keys(row)[index]

            return (
                <TableCell 
                    align= {cell.numeric ? 'right' : 'left'}
                    key={row[rowCellName]}>
                        {row[rowCellName]}
                </TableCell>
            )
        })
    }

  return (
    <MUITableBody>
        {rows.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;

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
                    {
                        !tableOnly && <TableCell padding="checkbox">
                            <Checkbox color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                'aria-labelledby': labelId,
                                }}
                            />
                        </TableCell>
                    }
                    
                    {populateCells(row)}
                </TableRow>
            )
        })}
    </MUITableBody>
  )
}

export default TableBody
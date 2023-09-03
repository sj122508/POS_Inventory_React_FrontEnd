import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

function TableHeader(props) {
    const { 
        headerCells,
        label,
        numberSelected, 
        rowCount, 
        order, 
        orderBy,
        onRequestSort,
        onSelectAllClick, 
        tableOnly,
     } = props;


    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    
  return (
    <TableHead>
        <TableRow>
            {/* First column checkbox */}
            {!tableOnly && 
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
            }
            
            {/* Header Cells */}
            {
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
                                onClick={createSortHandler(headerCell.id)}
                                sx={{color: "#616161" }}
                            >
                                {headerCell.label}
                                {orderBy === headerCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                        
                ))}
        </TableRow>
    </TableHead>
  )
}

export default TableHeader
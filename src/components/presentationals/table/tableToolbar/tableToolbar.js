import React from 'react'
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '../../button/button'
import Search from '../../search/search'
import { buttonVariant, buttonType } from '../../../../common/constants'
import { alpha } from '@mui/material/styles';


function TableToolbar(props) {
    const { numberSelected, tableTitle, onDeleteClick, onFilterClick } = props;

  return (
    <Toolbar
        sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numberSelected > 0 && {
            bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
        }}
    >
        {/* Table Title and Count */}
        {numberSelected > 0 ? (
            <Typography 
                sx={{ flex: '1 1 100%', color:"#616161", fontWeight: 'bold'}}
                color="inherit"
                variant="subtitle1"
                component="div"
            >
                {numberSelected} selected
            </Typography>
        ) : (
            <Typography
                sx={{ flex: '1 1 100%', color:"#616161", fontWeight: 'bold' }}
                variant="h6"
                id="tableTitle"
                component="div">
                {tableTitle}
            </Typography>
        )}

        {/* Delete Button and Search*/}
        {numberSelected > 0 ? (
        <Tooltip title="Delete">
          <Button 
            text='Delete' 
            type={buttonType.delete} 
            variant={buttonVariant.text} 
            textColor="#1976d2" 
            onClick={onDeleteClick}
          />
        </Tooltip>
        ) : (
          <Button 
            text='Filter'
            type={buttonType.filter}
            variant={buttonVariant.contained}
            onClick={onFilterClick}
          />
      )}


    </Toolbar>
  )
}

export default TableToolbar
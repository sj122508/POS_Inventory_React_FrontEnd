import React from 'react'
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '../../button/button'
import { buttonVariant, buttonType, skeletonSizes, skeletonTypes, flexDirections } from '../../../../common/constants'
import { alpha } from '@mui/material/styles';
import Skeleton from '../../skeleton/skeleton';


function TableToolbar(props) {
    const { isLoading ,numberSelected, tableTitle, onDeleteClick, onFilterClick } = props;

  const titleAndCount = () => {

    if (isLoading) {
      return (
        <Skeleton size={skeletonSizes.medium} type={skeletonTypes.text} />
      )
    }

   return (numberSelected > 0 ? (
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
            ))
  }

  const filterAndDeleteButtons = () => {

    if (isLoading) {
      return (
        <Skeleton size={skeletonSizes.medium} type={skeletonTypes.text} flexDirection={flexDirections.rowReverse}/>
      )
    }

    return numberSelected > 0 ? (
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
      )
  }

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
        {titleAndCount()}
        {filterAndDeleteButtons()}
    </Toolbar>
  )
}

export default TableToolbar
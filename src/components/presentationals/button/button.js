import React from 'react'
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FilterListIcon from '@mui/icons-material/FilterList';
import { buttonVariant, buttonType } from '../../../common/constants'

function Button({autoFocus, text, disabled, onClick, type, variant, textColor}) {

    const buttonIcon = () => {
    
        switch (type) {
            case buttonType.add:
                return <AddIcon />
            case buttonType.delete:
                return <DeleteForeverIcon />
            case buttonType.filter:
                return <FilterListIcon />
            default:
                return null
        }
    }
    
    if (variant === buttonVariant.contained) {
        return (
            <MuiButton 
                sx={{borderRadius: '20px', textTransform: 'none', minWidth: '150px', color: textColor ? textColor : "#FFF"}} 
                variant={buttonVariant.contained}
                disabled={disabled}
                onClick={onClick}
                startIcon={buttonIcon()}
                aria-label={text}
                autoFocus={autoFocus}
            >
                {text}
            </MuiButton>
        )
    } else if (variant === buttonVariant.text) {
        return (
            <MuiButton 
                sx={{borderRadius: '20px', textTransform: 'none', minWidth: '150px', color: textColor ? textColor : "#FFF"}} 
                variant={buttonVariant.text}
                disabled={disabled}
                onClick={onClick}
                startIcon={buttonIcon()}
                aria-label={text}
                autoFocus={autoFocus}
            >
                {text}
            </MuiButton>
        )
    } else if (variant === buttonVariant.outlined) {
        return (
            <MuiButton 
                sx={{borderRadius: '20px', textTransform: 'none', minWidth: '150px', color: textColor ? textColor : "#FFF"}} 
                variant={buttonVariant.outlined}
                disabled={disabled}
                onClick={onClick}
                startIcon={buttonIcon()}
                aria-label={text}
                autoFocus={autoFocus}
            >
                {text}
            </MuiButton>
        )
    }
  
    return null
}

export default Button
import React from 'react'
import { TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search({label, disabled ,inputChange, value}) {
  return (
    <TextField 
      id={`${label}-input`}
      aria-label={label}
      label={label}
      disabled={disabled} 
      size='small'
      color='primary' 
      sx={{ m: 1 }}
      InputProps={{
          endAdornment: <InputAdornment position="end">
              <SearchIcon />
          </InputAdornment>,
          sx: { borderRadius: '20px', height: '37px'},
      }}
    />   
  )
}

export default Search
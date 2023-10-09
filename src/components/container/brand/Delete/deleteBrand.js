import React from 'react'
import Alert from '../../../presentationals/alert/alert'


function DeleteBrand({open, handleClose, handleSubmit}) {
  return (
    <Alert open={open} handleClose={handleClose} handleOk={handleSubmit} title="Delete Brands" >
        Are you sure you want to delete selected Brand/s?
    </Alert>
  )
}

export default DeleteBrand
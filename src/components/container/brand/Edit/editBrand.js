import React from 'react'
import Modal from '../../../presentationals/modal/modal'
import Typography from '@mui/material/Typography';

function EditBrand({open, handleClose, handleSubmit, brand}) {
  return (
    <Modal open={open} title={`Edit Brand - ${brand.name}`} buttonLabel="Submit" handleClose={handleClose} handleOk={handleSubmit}>
        <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
      </Modal>
  )
}

export default EditBrand
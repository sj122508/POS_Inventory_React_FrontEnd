import React from 'react'
import Modal from '../../../presentationals/modal/modal'
import Typography from '@mui/material/Typography';

function FilterBrand({open, handleClose, handleFilter}) {
  return (
    <Modal open={open} title='Filter Brand' buttonLabel="Apply" handleClose={handleClose} handleOk={handleFilter}>
        <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
      </Modal>
  )
}

export default FilterBrand
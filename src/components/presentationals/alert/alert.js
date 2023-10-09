import * as React from 'react';
import Button from '../button/button';
import { buttonVariant } from '../../../common/constants';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Alert({open, handleClose, handleOk, title, children}) {


  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{mb:1, mr:1}}>
          <Button 
              text='Cancel'
              variant={buttonVariant.outlined}
              onClick={handleClose}
              textColor='#1976d2'
            />
          <Button 
              text='Confirm'
              variant={buttonVariant.contained}
              onClick={handleOk}
              autoFocus
            />
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Alert
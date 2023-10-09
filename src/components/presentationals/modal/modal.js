import React from 'react'
import Button from '../button/button'
import { buttonVariant } from '../../../common/constants';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

function Modal({open, handleClose, handleOk, title, buttonLabel, children}) {
    

  return (
    <div>
        <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            {children}
        </DialogContent>
        <DialogActions>
          <Button 
              text='Close'
              variant={buttonVariant.outlined}
              onClick={handleClose}
              textColor='#1976d2'
            />

          <Button 
              text={buttonLabel}
              variant={buttonVariant.contained}
              onClick={handleOk}
              autoFocus
            />
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Modal
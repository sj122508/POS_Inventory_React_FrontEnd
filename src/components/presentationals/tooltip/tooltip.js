import React from 'react'
import MUITooltip from '@mui/material/Tooltip';

function Tooltip(props) {
    const { title, placement, children } = props;
  return (
    <MUITooltip 
        title={title} 
        placement={placement}
        enterDelay={1000}
        leaveDelay={100}
    >
      {children}
    </MUITooltip>
  )
}

export default Tooltip
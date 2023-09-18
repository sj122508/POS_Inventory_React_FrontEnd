import React from 'react'
import MuiSkeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import {skeletonSizes, skeletonTypes} from '../../../common/constants'

function Skeleton(props) {

    if (props.type === "text" && props.size === skeletonSizes.small) { 
        return <Box  sx={{ 
                    flexDirection: props.flexDirection === undefined ? 'row' : props.flexDirection}}
                >
                    <MuiSkeleton variant={skeletonTypes.text} height='45px' animation='wave' />
                </Box>
    }

    if (props.type === "text" && props.size === skeletonSizes.medium) { 
        return <Box  sx={{ 
                    display: 'flex',
                    flexDirection: props.flexDirection === undefined ? 'row' : props.flexDirection, 
                    width:'100%'}}
                >
                    <MuiSkeleton variant={skeletonTypes.text} width='40%' height='45px' animation='wave' />
                </Box>
    }

    if (props.type === "text" && props.size === skeletonSizes.large) { 
        return <Box  sx={{ 
                    display: 'flex',
                    flexDirection: props.flexDirection === undefined ? 'row' : props.flexDirection, 
                    width:'100%'}}
                >
                    <MuiSkeleton variant={skeletonTypes.text} width='100%' height='45px' animation='wave' />
                </Box>
    }

    return null

}

export default Skeleton
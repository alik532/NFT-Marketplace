import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

const Account = ({size}) => {
    console.log(size)
    size = size ? size : 40
    return (
        <AccountCircleIcon sx={{fontSize: size}}/>
    )
}

export default Account
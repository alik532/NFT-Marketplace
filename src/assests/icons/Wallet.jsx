import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Wallet = ({size}) => {
    size = size ? size : 40
    return (
        <AccountBalanceWalletIcon sx={{fontSize: size}}/>
    )
}

export default Wallet
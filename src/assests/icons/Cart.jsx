import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = ({size}) => {
    console.log(size)
    size = size ? size : 40
    return (
        <ShoppingCartIcon sx={{fontSize: size}}/>
    )
}

export default Cart
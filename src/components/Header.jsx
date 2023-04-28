import React from 'react'
import classes from '../styles/Header.module.css'
import Wallet from '../assests/icons/Wallet'
import Cart from '../assests/icons/Cart'
import Account from '../assests/icons/Account'
import OpenSeaLogo from '../assests/icons/OpenSeaLogo'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import { selectCart, selectCartStatus, fetchUserCart } from '../reducers/cartReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase-config'

const Header = () => {
  
  const dispatch = useDispatch()
  const status = useSelector(selectCartStatus)
  const cart = useSelector(selectCart)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserCart(auth.currentUser ? auth.currentUser.uid : null))
    }
  })

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/'>
          <div className={classes.logo}>
            <OpenSeaLogo/>
            {cart ? Object.values(cart).length : null}
            <h2>OpenSea</h2>
          </div>
        </Link>
        <SearchBar placeholder='Search for NFTs'></SearchBar>
        <Wallet /> 
        <Cart />       
        <Link to='/register'>
          <Account/>
        </Link>
      </div>
    </div>
  )
}

export default Header
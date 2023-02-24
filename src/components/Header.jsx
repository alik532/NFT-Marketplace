import React from 'react'
import classes from '../styles/Header.module.css'
import Wallet from '../assests/icons/Wallet'
import Cart from '../assests/icons/Cart'
import Account from '../assests/icons/Account'
import OpenSeaLogo from '../assests/icons/OpenSeaLogo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/'>
          <div className={classes.logo}>
            <OpenSeaLogo/>
            <h2>OpenSea</h2>
          </div>
        </Link>
        <div className={classes.search}>
          <input type="text" placeholder='Search for NFTs'/>
        </div>
        <Wallet />
        <Cart />
        <Account/>
      </div>
    </div>
  )
}

export default Header
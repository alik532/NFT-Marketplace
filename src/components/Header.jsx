import React from 'react'
import classes from '../styles/Header.module.css'
import Wallet from '../assests/icons/Wallet'
import Cart from '../assests/icons/Cart'
import Account from '../assests/icons/Account'
import OpenSeaLogo from '../assests/icons/OpenSeaLogo'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../reducers/currentUserReducer'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

const Header = () => {
  
  const user = useSelector(selectCurrentUser)
  console.log(user)

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/'>
          <div className={classes.logo}>
            <OpenSeaLogo/>
            <h2>OpenSea</h2>
          </div>
        </Link>
        <SearchBar placeholder='Search for NFTs'></SearchBar>
        <Wallet /> 
        <div className={classes.cart}>
          <Cart />       
          {user && <div className={classes.numItems}>{Object.values(user.cart).length}</div>}
        </div>
        <Link to='/register'>
          <Account/>
        </Link>
        {user && <div className={classes.logout} onClick={() => signOut(auth)}>Log Out</div>}
      </div>
    </div>
  )
}

export default Header
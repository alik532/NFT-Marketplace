import React from 'react'
import classes from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        <img src='https://opensea.io/static/images/logos/opensea.svg' alt='logo'/>
        <div className={classes.search}>
            <input type="text" className={classes.search}/>
        </div>
    </div>
  )
}

export default Header
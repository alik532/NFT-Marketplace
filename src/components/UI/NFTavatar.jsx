import React from 'react'
import classes from '../../styles/NFTavatar.module.css'

const NFTavatar = ({size, url}) => {
  return (
    <div className={classes.avatar} style={{width: `${size}px`, height: `${size}px`}}>
        <img className={classes.image} src={url} alt="" style={{width: `${size-9}px`, height: `${size-9}px`}}/>
    </div>
  )
}

export default NFTavatar
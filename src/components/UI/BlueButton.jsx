import React from 'react'
import classes from '../../styles/BlueButton.module.css'

const BlueButton = ({onClick, placeholder}) => {
  return (
    <button className={classes.button} onClick={onClick}>
        {placeholder}
    </button>
  )
}

export default BlueButton
import React from 'react'
import classes from '../styles/SearchBar.module.css'
import Loupe from '../assests/icons/Loupe'
import { Remove, } from '@mui/icons-material'

const SearchBar = ({placeholder, value, onChange}) => {

  return (
    <div className={classes.search}>
        <Loupe size={27}/>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
        {value ? (<div className={classes.remove} ><Remove></Remove></div>) : null}
    </div>
  )
}

export default SearchBar
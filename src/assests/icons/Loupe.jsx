import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Loupe = ({size}) => {
  size = size ? size : 40
  return (
      <SearchIcon sx={{fontSize: size}}/>
  )
}

export default Loupe
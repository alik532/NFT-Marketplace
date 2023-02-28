import React from 'react'
import { Star } from '@mui/icons-material'

const StarIcon = ({ size }) => {

  size = size ? size : 40

  return (
    <Star sx={{fontSize: size}}/>
  )
}

export default StarIcon
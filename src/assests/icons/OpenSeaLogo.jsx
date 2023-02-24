import React from 'react'

const OpenSeaLogo = ({size}) => {

    size = size ? size : 40

  return (
    <img src='https://opensea.io/static/images/logos/opensea.svg' alt='logo' style={{width: size, height: size}}/>
  )
}

export default OpenSeaLogo
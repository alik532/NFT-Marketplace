import React from 'react'
import classes from '../styles/AssetCard.module.css'
import { getValidPreviewImgLink } from '../helperFunctions/getValidPreviewImgLink'
import { addAssetToCart } from '../reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase-config'
import { addAssetToCartDB } from '../services/database'

const AssetCard = ({asset}) => {

  const getValidPrice = (price, decimals) => {
    return +price.slice(0, price.length-decimals+1)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    const user = auth.currentUser
    if (user) {
      addAssetToCartDB(asset)
      dispatch(addAssetToCart(asset))
    }
    else {
      console.log("User is not logged in")
    }
  }

  return (
    asset.image_preview_url && 
      (<div className={classes.card}>
        <div className={classes.wrapper}>
          <img className={classes.img}  alt="pfp" src={getValidPreviewImgLink(asset.image_preview_url)}/>
        </div>
        <div className={classes.board}>
          {asset.name ? <h2 className={classes.name}>{asset.name}</h2> : <h2 className={classes.name}>{asset.token_id}</h2>}
          {asset.last_sale ? <h4>Price: {getValidPrice(asset.last_sale.total_price, asset.last_sale.payment_token.decimals)} ETH</h4> : <h4>Price: --</h4>}
        <div className={classes.add} onClick={addToCart}>
          <h3>Add to cart</h3>
        </div>
        </div>
    </div>)
  )
}

export default AssetCard
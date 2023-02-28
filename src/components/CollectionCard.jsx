import React from 'react'
import classes from '../styles/CollectionCard.module.css'
import { Verified } from '@mui/icons-material'

const CollectionCard = ({collection}) => {
  return (
    <div className={classes.card}>
        <img src={collection.image_url} alt="" className={classes.img}/>
        <div className={classes.info}>
            <h2 className={classes.title}>
                <div>
                    {collection.name} 
                </div>
                <Verified/>
            </h2>
            <div className={classes.stats}>
                <div className={classes.floorPrice}>
                    <div className={classes.stat}>
                        FLOOR
                    </div>
                    <h2>
                        {Math.floor(collection.stats.floor_price)} ETH
                    </h2>
                </div>
                <div className={classes.volume}>
                    <div className={classes.stat}>
                        TOTAL VOLUME
                    </div>
                    <h2>
                        {Math.floor(collection.stats.total_volume)} ETH
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard
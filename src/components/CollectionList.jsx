import React from 'react'
import classes from '../styles/CollectionList.module.css'
import CollectionCard from './CollectionCard'

const CollectionsList = ({collections}) => {
  return (
    <div className={classes.list}>
        {collections.map(collection => 
          <CollectionCard collection={collection}/>
        )}
    </div>
  )
}

export default CollectionsList
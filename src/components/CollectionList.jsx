import React from 'react'
import classes from '../styles/CollectionList.module.css'
import CollectionCard from './CollectionCard'
import { Link } from 'react-router-dom'

const CollectionsList = ({collections}) => {
  return (
    <div className={classes.list}>
        {collections.map((collection, indx) => 
        <Link to={`/collection/${collection.slug}`} key={indx}>
          <CollectionCard collection={collection}/>
        </Link>
        )}
    </div>
  )
}

export default CollectionsList
import React from 'react'
import classes from '../styles/CollectionPage.module.css'
import { useParams } from 'react-router-dom'
import { fetchAssets } from '../reducers/AssetsReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAssetsStatus } from '../reducers/AssetsReducer'
import { selectAllAssets } from '../reducers/AssetsReducer'

const CollectionPage = () => { 

  const status = useSelector(selectAssetsStatus)
  const dispatch = useDispatch()
  const { slug } = useParams()

  const assets = useSelector(selectAllAssets)

  console.log(assets)

  useEffect(() => {
    if (status === 'idle') {
      console.log('fetching assets')
      dispatch(fetchAssets(slug))
    }
  }, [dispatch, status, slug])

  return (
    <div className={classes.collectionPage}>
        <div className={classes.container}>

        </div>
    </div>
  )
}

export default CollectionPage
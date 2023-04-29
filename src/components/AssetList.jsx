import React from 'react'
import classes from '../styles/AssetList.module.css'
import AssetCard from './AssetCard'
import { useState, useEffect } from 'react'
import fetchCollectionAssets from '../helperFunctions/fetchCollectionAssets'

const AssetList = ({slug, searchQuery}) => {

  const [assets, setAssets] = useState([])
  const [filteredAssets, setFilteredAssets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [next, setNext] = useState()

  useEffect(() => {
    const getAssets = async () => {
      const response = await fetchCollectionAssets(slug)
      setAssets(response.assets)
      setIsLoading(false)
      setNext(response.next)
      setFilteredAssets(response.assets)
    }
    if (isLoading) {
      getAssets()
    }
    if (searchQuery !== "") {
      setFilteredAssets(assets.filter(asset => {
        return asset.name ? asset.name.toLowerCase().includes(searchQuery.toLowerCase()) : asset.token_id.toLowerCase().includes(searchQuery.toLowerCase())
      }))
    }
    else {
      setFilteredAssets(assets)
    }
  }, [searchQuery, slug, assets, isLoading])
  
  
  const loadMore = async () => {
    const response = await fetchCollectionAssets(slug, next)
    setAssets(prev => [...prev, ...response.assets])
    setFilteredAssets(assets)
    setNext(response.next)
    setIsLoading(false)
  }

  return (
    <div>
      <div className={classes.list}>
          {filteredAssets.map(asset => 
            <AssetCard asset={asset} slug={slug} key={asset.id}/>
          )}
      </div>
      {!isLoading && <button className={classes.load} onClick={loadMore}>Load More</button>}
    </div>
  )
}

export default AssetList
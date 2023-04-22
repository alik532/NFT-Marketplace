import React, { useState } from 'react'
import classes from '../styles/CollectionPage.module.css'
import { getValidBannerImgLink } from '../helperFunctions/getValidBannerImgLink';
import { fetchCollections } from '../helperFunctions/fetchCollection';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/Loader'
import NFTavatar from '../components/UI/NFTavatar';
import { Verified, Instagram, Twitter, Telegram, Share, Report, WebAsset, OpenInFull } from '@mui/icons-material';
import { getValidNumber } from '../helperFunctions/getValidNumber';
import { getValidDate } from '../helperFunctions/getValidDate';
import DiscordLogo from '../assests/icons/DiscordLogo';
import StarIcon from '../assests/icons/StarIcon'
import Description from '../components/Description';
import AssetList from '../components/AssetList';
import SearchBar from '../components/SearchBar';
import MyDropdown from '../components/UI/MyDropdown';
import DropPanel from '../components/UI/DropPanel';

const CollectionPage = () => {

  const [sortType, setSortType] = useState("Price low to high")
  const { slug } = useParams()
  const [collection, setCollection] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isPanelExpanded, setIsPanelExpanded] = useState(true)
  const [assetsSearchQuery, setAssetsSearchQuery] = useState("")

  const togglePanel = () => {
    setIsPanelExpanded(prev => !prev)
  }

  useEffect(() => {
      const getCollections = async () => {  
        const response = await fetchCollections(slug)
        setCollection(response)
        setIsLoading(false)
      }
      if (isLoading) {
        getCollections()
      }
  })
  return isLoading 
    ? <Loader></Loader> 
    : (
    <div className={classes.collectionPage}>
      <div className={classes.bannerImg} style={{backgroundImage:`url(${isLoading ? null : getValidBannerImgLink(collection.banner_image_url)})`}}>
        
      </div>
      <div className={classes.avatar}>
        <NFTavatar url={collection.image_url} size={200}></NFTavatar>
      </div>
      <div className={classes.container}>
        <div className={classes.mainInfoContainer}>
            <div className={classes.infoTexts}>
              <h2 className={classes.collectionName}>{collection.name}  <Verified></Verified></h2>
              <div className={classes.mainInfoStrings}>
                <div className={classes.author}>Items {getValidNumber(collection.stats.count)}</div>
                <div> · </div>
                <div className={classes.created}>Created {getValidDate(collection.created_date)}</div>
                <div> · </div>
                <div>Chain Ethereum</div>
                <div> · </div>
                <div>Category PFP</div>
              </div>
              <br/>
              <Description description={collection.description}></Description>
            </div>
            <div className={classes.infoButtons}>
              {collection.discord_url 
                ?  <div className={classes.iconWrapper}><a href={collection.discord_url}><DiscordLogo size={25}></DiscordLogo></a></div>
                : null}
              {collection.telegram_url 
                ?  <div className={classes.iconWrapper}><a href={collection.telegram_url}><Telegram sx={25}></Telegram></a></div>
                : null}
              {collection.instagram_username 
                ?  <div className={classes.iconWrapper}><a href={`https://instagram.com/${collection.instagram_username}`}><Instagram></Instagram></a></div>
                : null}
              {collection.twitter_username 
                ?  <div className={classes.iconWrapper}><a href={`https://twitter.com/${collection.twitter_username}`}><Twitter ></Twitter></a></div>
                : null}
              {collection.external_url 
                ?  <div className={classes.iconWrapper}><a href={collection.external_url }><WebAsset></WebAsset></a></div>
                : null}
              <div className={classes.vLine}></div>
              <div className={classes.iconWrapper}>
                <StarIcon size={25}></StarIcon>
              </div>
              <div className={classes.iconWrapper}>
                <Share></Share>
              </div>
              <div className={classes.iconWrapper}>
                <Report></Report>
              </div>
            </div>
        </div>
        <div className={classes.stats}>
          {collection.stats.total_volume ? (<div>
            <h2 className={classes.stat}>{collection.stats.total_volume.toFixed(0)} ETH</h2>
            <h5>total volume</h5>
          </div>) : null}
          {collection.stats.floor_price ? (<div>
            <h2 className={classes.stat}>{collection.stats.floor_price.toFixed(0)} ETH</h2>
            <h5>floor price</h5>
          </div>) : null}
          {collection.stats.total_sales ? <div>
            <h2 className={classes.stat}>{collection.stats.total_sales.toFixed(0)}</h2>
            <h5>total sales</h5>
          </div> : null}
          {collection.stats.average_price ? (<div>
            <h2 className={classes.stat}>{collection.stats.average_price.toFixed(0)} ETH</h2>
            <h5>average price</h5>
          </div>) : null}
          {collection.stats.num_owners ? (<div>
            <h2 className={classes.stat}>{collection.stats.num_owners.toFixed(0)}</h2>
            <h5>owners</h5>
          </div>) : null}
          {collection.stats.one_day_sales ? (<div>
            <h2 className={classes.stat}>{collection.stats.one_day_sales.toFixed(0)}</h2>
            <h5>one day sales</h5>
          </div>) : null}
        </div>
        <hr />
        <div className={classes.assetNavbar}>
          <div className={classes.expander} onClick={togglePanel}>
            <h3>{isPanelExpanded ? "Collapse" : "Expand"}</h3>
            <OpenInFull></OpenInFull>
          </div>
          <h3 className={classes.nResults}>{collection.stats.count} results</h3>
          <SearchBar value={assetsSearchQuery} onChange={(value) => setAssetsSearchQuery(value)} placeholder="Search asset by name"></SearchBar>
          <MyDropdown options={["Price low to high", "Price high to low"]} selectedOption={sortType} onSelect={(option) => setSortType(option)}></MyDropdown>
        </div>
        <div className={classes.assetContainer} style={{marginLeft: isPanelExpanded ? "0px" : "10px"}}>
          <div className={classes.sortPanel} style={{display: isPanelExpanded ? "initial" : "none"}}>
            <DropPanel title="Status">
              <div>Hello world</div>
            </DropPanel>
            <DropPanel title="Price">
              <div>Hello world</div>
            </DropPanel>
          </div>
          <AssetList slug={slug} searchQuery={assetsSearchQuery}></AssetList>
        </div>
      </div>
    </div>
  )
}

export default CollectionPage
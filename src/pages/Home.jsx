import React from 'react'
import classes from '../styles/Home.module.css'
import { collections } from '../data/HomePageCollections'
import { getValidImgLink } from '../helperFunctions/validateImgLinks'
import CollectionList from '../components/CollectionList'

const Home = () => {

    console.log(collections)
    const bannerCollection = collections[9]

    return (
        <div className={classes.home}>
            <div className={classes.bannerCurtain}></div>
            <img className={classes.bannerBackground} style={{backgroundImage: `url(${getValidImgLink(bannerCollection.banner_image_url)})`}} alt=''/>
            <div className={classes.container}>
                <div className={classes.bannerImg} alt="" style={{backgroundImage: `url(${getValidImgLink(bannerCollection.banner_image_url)})`}} >
                    <div className={classes.bannerInfo}>
                        <img src={bannerCollection.image_url} alt="" className={classes.collectionLogo}/>
                        <h2 className={classes.collectionTitle}>{bannerCollection.name}</h2>
                        <div className={classes.author}>By {bannerCollection.twitter_username}</div>
                        <div className={classes.items}>{bannerCollection.stats.count} items - {bannerCollection.stats.floor_price} ETH</div>
                    </div>
                    <div className={classes.bannerButons}>
                        <div className={classes.favorites}>favorites</div>
                        <div className={classes.view}>View Collection</div>
                    </div>
                </div>
                <CollectionList collections={collections}/>
            </div>
        </div>
    )
}

export default Home
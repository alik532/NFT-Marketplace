import React from 'react'
import classes from '../styles/Home.module.css'
import { collections } from '../data/HomePageCollections'
import { getValidImgLink } from '../helperFunctions/validateImgLinks'
import CollectionList from '../components/CollectionList'
import { useState } from 'react'

const Home = () => {

    console.log(collections)

    const [banner, setBanner] = useState(0)

    const bannerCollection = collections[banner]

    function changeBanner(to) {
        if (to === "left" && banner !== 0)
            setBanner(prev => prev - 1)
        else if (to === 'right' & banner !== collections.length - 1)
            setBanner(prev => prev+1)
    }

    return (
        <div className={classes.home}>
            <div className={classes.bannerCurtain}></div>
            <img className={classes.bannerBackground} style={{backgroundImage: `url(${getValidImgLink(bannerCollection.banner_image_url)})`}} alt=''/>
            <div className={classes.container}>
                <div className={classes.arrow} style={{left: "45px", top: "400px"}} onClick={() => changeBanner("left")}>{`<`}</div>
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
                <div className={classes.arrow} style={{right: "45px", top: "400px"}} onClick={() => changeBanner("right")}>{`>`}</div>
                </div>
                <CollectionList collections={collections}/>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import classes from '../styles/Home.module.css'
import { collections } from '../data/HomePageCollections'
import { getValidBannerImgLink } from '../helperFunctions/getValidBannerImgLink'
import CollectionList from '../components/CollectionList'
import { useState } from 'react'
import StarIcon from '../assests/icons/StarIcon'
import { Link } from 'react-router-dom'

const Home = () => {

    console.log(collections)

    const [bannerIndx, setBannerIndx] = useState(0)

    const bannerCollection = collections[bannerIndx]

    function changeBanner(to) {
        if (to === "left" && bannerIndx !== 0)
            setBannerIndx(prev => prev - 1)
        else if (to === 'right' & bannerIndx !== collections.length - 1)
            setBannerIndx(prev => prev+1)
    }

    return (
        <div className={classes.home}>
            <div className={classes.bannerCurtain}></div>
            <img className={classes.bannerBackground} style={{backgroundImage: `url(${getValidBannerImgLink(bannerCollection.banner_image_url)})`}} alt=''/>
            <div className={classes.arrow} style={{left: "45px", top: "400px"}} onClick={() => changeBanner("left")}>{`<`}</div>
            <div className={classes.container}>
                <div className={classes.bannerImg} alt="" style={{backgroundImage: `url(${getValidBannerImgLink(bannerCollection.banner_image_url)})`}} >
                    <div className={classes.bannerInfo}>
                        <img src={bannerCollection.image_url} alt="" className={classes.collectionLogo}/>
                        <h2 className={classes.collectionTitle}>{bannerCollection.name}</h2>
                        <div className={classes.author}>By {bannerCollection.twitter_username}</div>
                        <div className={classes.items}>{bannerCollection.stats.count} items - {bannerCollection.stats.floor_price} ETH</div>
                    </div>
                    <div className={classes.bannerButtons}>
                        <div className={classes.favorites}>
                            <div>
                                <StarIcon size={35}/>
                            </div>
                        </div>
                        <Link to={`/collection/${bannerCollection.slug}`}>
                            <div className={classes.view}>
                                <div>
                                    VIEW COLLECTION
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={classes.arrow} style={{right: "45px", top: "400px"}} onClick={() => changeBanner("right")}>{`>`}</div>
                <CollectionList collections={collections}/>
            </div>
        </div>
    )
}

export default Home
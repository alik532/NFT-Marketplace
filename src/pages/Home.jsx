import React from 'react'
import classes from '../styles/Home.module.css'
import { collections } from '../data/HomePageCollections'

const Home = () => {

    console.log(collections)

    return (
        <div className={classes.home}>
            <div className={classes.banner} style={{backgroundImage: `url(${collections[1].banner_image_url})`}}>
                <div className={classes.container}>
                    <div className={classes.bannerImg} alt="" >
                        <div className={classes.bannerInfo}>
                            <img src="" alt="" className={classes.collectionLogo}/>
                            <h2 className={classes.collectionTitle}>Title</h2>
                            <div className={classes.author}></div>
                            <div className={classes.items}></div>
                        </div>
                        <div className={classes.bannerButons}>
                            <div className={classes.favorites}></div>
                            <div className={classes.view}>View Collection</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
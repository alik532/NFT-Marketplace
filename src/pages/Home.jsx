import React from 'react'
import classes from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.banner}>
            <div src={classes.bannerImg} alt="">
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
  )
}

export default Home
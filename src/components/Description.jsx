import React from 'react'
import classes from '../styles/Description.module.css'
import { useState } from 'react'

const Description = ({description}) => {

    const [showMore, setShowMore] = useState(true) 

    const toggle = () => {
        setShowMore(prevToggle => !prevToggle)
    }

    return description.length > 120 
    ? (<div className={classes.description}>{showMore ? description.slice(0,120)+"..." : description}
        <br/>
        <div onClick={toggle}>
            <h4 className={classes.button}>{showMore ? "Show More" : "Show Less"}</h4>
        </div>
      </div>)
    : (<div className={classes.description}>{description}</div>)
}

export default Description
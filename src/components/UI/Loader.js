import React from 'react'
import classes from '../../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
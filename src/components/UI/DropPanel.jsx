import React from 'react'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import classes from '../../styles/DropPanel.module.css'
import { useState } from 'react'

const DropPanel = ({title, children}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className={classes.panel} onClick={() => setIsOpen(prev => !prev)}>
          <h3 className={classes.title}>{title}</h3>
          {!isOpen ? <ArrowDownward></ArrowDownward> : <ArrowUpward></ArrowUpward>}
      </div>
      {isOpen && (<div className={classes.space}>
        {children}
      </div>)}
      {isOpen && <hr />}
    </div>
  )
}

export default DropPanel
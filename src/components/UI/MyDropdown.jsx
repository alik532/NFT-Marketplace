import React from 'react'
import classes from '../../styles/MyDropdown.module.css'
import { useState } from 'react'
import { ArrowDownward } from '@mui/icons-material'

const MyDropdown = ({options, selectedOption, onSelect}) => {
    console.log(options)
    const [isOpen, setIsOpen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [selected, setSelected] = useState(selectedOption)
    selectedOption = selectedOption ? selectedOption : options[0]

    const optionList = () => {
        return options.map(option => 
            <div className={classes.option} onClick={() => select(option)} key={option}>
                <h2>{option}</h2>
            </div>    
        )
    }

    const select = (option) => {
        onSelect(option)
        setSelected(option)
        setIsOpen(false)
    }

    return (
        <div className={classes.myDrop}>
            <div className={classes.selected} onClick={() => setIsOpen(prev => !prev)}>
                <h2>{selectedOption} </h2><ArrowDownward></ArrowDownward>
            </div>
            {isOpen ? <div className={classes.list}>{optionList()}</div> : null}
        </div>
    )
}

export default MyDropdown
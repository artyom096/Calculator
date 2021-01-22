import React from 'react'
import classes from './Display.module.css'

function Display(props){
    return (
        <input 
        value={props.value} 
        className={classes.Input} 
        type='text'
        />
    )
}

export default Display
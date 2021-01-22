import React, { Component } from 'react'
import Display from '../Display/Display'
import classes from './Keyboard.module.css'

class Keyboard extends Component {

    state = {
        value: ''
      }

    onClick = (event) => {
        this.setState({
            value: this.state.value + event.target.value
        }) 
    }
    
    onSqrt = () => {
        this.setState({
            value: Math.sqrt(+this.state.value)
        })
    }

    onBack = () => {
        let back = String(this.state.value)
        back.split('')
        back = back.slice(0,back.length - 1)
        this.setState({
            value: back
        })
    }

    onDelete = () => {
        this.setState({
            value: ''
        })
    }

    onEqual = () => {
        this.setState({
            value: parseFloat(eval(this.state.value))
        })
    }

    render() {
        console.log(this.state.value);
        return (
            <>
            <Display value={this.state.value} />
            <div className={classes.Keyboard}>
                <button className={classes.btn} onClick={() => this.onSqrt()} >&#8730;</button>
                <button className={classes.btn} onClick={() => this.onDelete()} >С</button>
                <button className={classes.back} onClick={() => this.onBack()} >&#8592;</button>
                <button value='7' onClick={event => this.onClick(event)} >7</button>
                <button value='8' onClick={event => this.onClick(event)} >8</button>
                <button value='9' onClick={event => this.onClick(event)} >9</button>
                <button className={classes.btn} value='*' onClick={event => this.onClick(event)} >х</button>
                <button value='4' onClick={event => this.onClick(event)} >4</button>
                <button value='5' onClick={event => this.onClick(event)} >5</button>
                <button value='6' onClick={event => this.onClick(event)} >6</button>
                <button className={classes.btn} value='-' onClick={event => this.onClick(event)} >-</button>
                <button value='1' onClick={event => this.onClick(event)} >1</button>
                <button value='2' onClick={event => this.onClick(event)} >2</button>
                <button value='3' onClick={event => this.onClick(event)} >3</button>
                <button className={classes.btn} value='+' onClick={event => this.onClick(event)} >+</button>
                <button className={classes.btn} value='.' onClick={event => this.onClick(event)} >,</button>
                <button value='0' onClick={event => this.onClick(event)} >0</button>
                <button className={classes.btn} value='/' onClick={event => this.onClick(event)} >&#247;</button>
                <button className={classes.btn} className={classes.equal} value='=' onClick={() => this.onEqual()} >=</button>
            </div>
            </>
        )
    }
}

export default Keyboard

// равно на энтер
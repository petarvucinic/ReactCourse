import React from "react";
import style from './counter.module.css'


class Counter2 extends React.Component {


    constructor(props){
        super(props)
        this.state = {counter : 0}
    }

    increment = (e) => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    decrement = (e) => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render(){
        return (
            <div>
                <p>{this.state.counter}</p>
                <button className={style.btn} onClick={(e) => {this.increment(e)}}>+</button>
                <button className={style.btn} onClick={(e) => {this.decrement(e)}}>-</button>
            </div>
        )
    }
}


export default Counter2




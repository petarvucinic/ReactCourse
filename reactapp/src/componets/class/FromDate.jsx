import React from "react";

class Milis extends React.Component{
    constructor(props){
        super(props)
        const date = new Date(2022, 6, 1, 5, 23, 59).getSeconds
        this.state = { dayYesterday: date, time : ''}
    }

    // caluclateDiff(){

    // }

    componentDidMount(){
        this.intervalId = setInterval(() => {

        }, 1000) 
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return (
            <p>this.state.time</p>
        )
    }
}

export default FromDate



import { Component } from "react";
import './App.css'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            cnt : 0
        }  
    }
    plus(){
        this.setState({
            cnt : this.state.cnt + 1
        })
    }
    minus(){
        this.setState({
            cnt : this.state.cnt - 1
        })
    }
render(){
    return(
        <>
        <div className="main" align="center">
            <h1>Counter in Class Component</h1>
            <button className="plus" onClick={()=> this.plus()}>+</button>
            <button className="cnt">{this.state.cnt}</button>
            {
                (this.state.cnt > 0)? 
                <button className="minus" onClick={()=> this.minus()}>-</button> : 
                <button disabled className="minus" onClick={()=> this.minus()}>-</button>
            }<br/>
            <button className="reset">Reset</button>
        </div>
        </>
    )
}
}

export default Counter
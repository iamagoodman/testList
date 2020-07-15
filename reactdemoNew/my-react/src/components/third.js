import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Third extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    speak=()=>{
        this.props.saySomething()
    }
    jump=()=>{
        console.log(this.props)
        this.props.history.push({pathname:'second'})
    }
    render() {
        return(
            <div>
                <h1>I AM THIRD</h1>
                <Link to='/'>home</Link>
                <h2>{this.props.name}</h2>
                <button onClick={this.speak}>say something</button>
                <button onClick={this.jump}>jump to home</button>
            </div>
        )
    }
}
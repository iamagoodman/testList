import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Third from './third'
export default class Second extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'Frank',
            age:28
        }
    }
    sayAge=()=>{
        console.log(this)
        console.log(`I AM ${this.state.age} YEARS OLD`)
    }
    render() {
        return(
            <div>
                <h1>I AM SECOND</h1>
                <Link to='/'>home</Link>
                <Third name={this.state.name} saySomething={this.sayAge}/>
            </div>
        )
    }
}
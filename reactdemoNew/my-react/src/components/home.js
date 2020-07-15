import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentWillMount(){
        console.log(this)
    }
    render() {
        return(
            <div>
                <h1>I AM HOME</h1>
                <Link to='/second'>second</Link>
                <br/>
                <Link to='/third'>third</Link>
            </div>
        )
    }
}
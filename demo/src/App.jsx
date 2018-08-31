import React from 'react'
import Routes from './config/router'
import {Link} from 'react-router-dom'

export default class Ljh extends React.Component{
    componentDidMount(){

    }
    render(){
        return[
            <div>
            <Link to="/">index1</Link>
            <br />
            <Link to="/index2">index2</Link>
            <br/>
            <Link to='/index3'>index3</Link>
            <div> this is abc</div>
            </div>,
            <Routes />
        ]
    }
}
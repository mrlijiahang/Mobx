import React from 'react'
import {observer,inject} from 'mobx-react'
// import { observable } from 'mobx';

@inject('appState') @observable

export default  class demo extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>{this.props.appState.msg}</div>
        )
    }
}
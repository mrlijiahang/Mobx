import React from 'react'
import { observer, inject } from 'mobx-react'
import Routes from '../config/router.jsx'
import { AppState } from '../store/store'
// import { observable } from 'mobx';

@inject('appState') @observer

export default class demo extends React.Component {
    constructor(){
        super()
        this.changeName=this.changeName.bind(this)
    }
    componentDidMount() {

    }
    changeName(event){
        // 不推荐之间改需要通过action
        // this.props.appState.name =event.target.value
        this.props.appState.changeName(event.target.value)
    }
    // React 16可以不只有一个div根节点
    render() {
        return (
            <div>
                <div>this is app</div>
                <input type="text" onChange={this.changeName} />
                <div>{this.props.appState.msg}</div>
            </div>
        )
    }
}
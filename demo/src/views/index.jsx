import React from 'react'
import { observer, inject } from 'mobx-react'
@inject('appState') @observer

export default class Demo1 extends React.Component {
    constructor(){
        super()
        this.changeName=this.changeName.bind(this)
        this.add=this.add.bind(this)
    }
    componentDidMount() {

    }
    changeName(event){
        // 不推荐之间改需要通过action
        // this.props.appState.name =event.target.value
        this.props.appState.changeName(event.target.value)
    }
    add(){
        this.props.appState.add()
        // this.props.appState.count+=1
    }
    // React 16可以不只有一个div根节点
    render() {
        return [
            <div>
                <div>index1</div>
                <input key="banner2" type="text" onChange={this.changeName} />
                <button onClick={this.add}>点我加1</button>
                <div key="banner" >{this.props.appState.msg}</div>
            </div>
        ]
    }
}
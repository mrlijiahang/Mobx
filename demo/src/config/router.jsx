import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Demo1 from '../views/index'
import Demo2 from '../views/index1'
import Demo3 from '../views/index2'
export default class Demo extends React.Component {
    render() {
        return [
        <Switch>
         {/* <Redirect from="/" to='/index3' />, */}
        <Route path='/' component={Demo1} exact key="index1" />,
        <Route path='/index2' component={Demo2} key="index2" />,
        <Route path="/index3" component={Demo3} key="index3" />,
        </Switch>
        ]

    }
}
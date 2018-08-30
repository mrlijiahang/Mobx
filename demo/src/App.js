import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import App from './views/index'
import appState from './store/app-state.js'


const root =document.getElementById('root')
const render =(Component)=>{
  ReactDOM.hydrate(
    <AppContainer>
      <provider appState={appState}>
      <Component></Component>
      </provider>
    </AppContainer>,
    root
  )
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
   
//       </div>
//     );
//   }
// }

export default App;

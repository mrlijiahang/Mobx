import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'
import App from './views/index'
import appState from './store/app-state.js'


const root =document.getElementById('root')
const render =(Component)=>{
  ReactDOM.hydrate(
    <AppContainer>
    <BrowserRouter>
      <Provider appState={appState}>
      <Component/>
      </Provider>
      </BrowserRouter>
    </AppContainer>,
    root
  )
}

render(App )

// export default App;

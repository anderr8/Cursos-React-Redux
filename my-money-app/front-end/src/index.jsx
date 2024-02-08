// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './main/app'

// ReactDOM.render(<App />, document.getElementById('app'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// import App from './main/app'
// import Reducers from './main/reducers'

// const store = createStore(Reducers)
// ReactDOM.render(
//     <Provider store={ store }>
//         <App />
//     </Provider>
// , document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

// Navegação com React-router (Versão 2)
// import App from './main/app'
import Routes from './main/routes'
import Reducers from './main/reducers'

// Configurando Redux DevTools

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)
ReactDOM.render(
    <Provider store={ store }>
        {/* <App /> */}
        <Routes />
    </Provider>
, document.getElementById('app'))
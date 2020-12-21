import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import App from './App.js'
import { rootReduceer } from './redux/rootReducer.js'

const store = createStore(rootReduceer, compose(
    applyMiddleware(
        thunk
    ),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.querySelector('#root'))
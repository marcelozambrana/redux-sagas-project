import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/index'
import indexSaga from './sagas/index'

import Info from './Info'
import UserAgent from './UserAgent'

const sagaMiddleware = createSagaMiddleware() 

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent />
        </div>
      </Provider>
    )
  }
}

export default App

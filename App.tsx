import 'react-native-gesture-handler'

import React, {FC} from 'react'

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import {AppNavigation} from '~/navigation'
import {appReducer, rootSaga} from '~/state'

const App: FC = () => {
  const createSagaMiddleware = require('redux-saga').default
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: appReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)
    },
    enhancers(getDefaultEnhancers) {
      return getDefaultEnhancers()
    },
  })
  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App

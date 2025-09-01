import {combineReducers} from 'redux'

import {spawn} from 'redux-saga/effects'
import {Action, CryptocurrencyList} from '~/resource/models'
import {
  GET_CRYPTO_LIST_CLEAR,
  GET_CRYPTO_LIST_ERROR,
  GET_CRYPTO_LIST_REQUEST,
  GET_CRYPTO_LIST_SUCCESS,
  watchCryptoListAction,
} from './currency'

export type CryptocurrencyListState = {
  data: CryptocurrencyList
  loading: boolean
  error: any
}

const initialState: CryptocurrencyListState = {
  loading: false,
  data: [],
  error: undefined,
}

const cryptoList = (state = initialState, action: Action): CryptocurrencyListState => {
  switch (action.type) {
    case GET_CRYPTO_LIST_REQUEST:
      return {...initialState, loading: true}

    case GET_CRYPTO_LIST_SUCCESS:
      return {...initialState, data: action.payload}

    case GET_CRYPTO_LIST_ERROR:
      return {...initialState, error: action.payload}

    case GET_CRYPTO_LIST_CLEAR:
      return initialState

    default:
      return state
  }
}

export const appReducer = combineReducers({
  cryptoList,
})

export type AppReducer = ReturnType<typeof appReducer>

export function* rootSaga() {
  yield spawn(watchCryptoListAction)
}

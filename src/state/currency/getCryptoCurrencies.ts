import Config from 'react-native-config'
import {call, put, takeLatest} from 'redux-saga/effects'
import {CryptocurrencyList} from '~/resource/models'
import {getAPI} from '~/service'

export const GET_CRYPTO_LIST_REQUEST = 'GET_CRYPTO_LIST_REQUEST'
export const GET_CRYPTO_LIST_SUCCESS = 'GET_CRYPTO_LIST_REQUEST'
export const GET_CRYPTO_LIST_ERROR = 'GET_CRYPTO_LIST_REQUEST'
export const GET_CRYPTO_LIST_CLEAR = 'GET_CRYPTO_LIST_REQUEST'

export const getCryptoListAction = () => ({
  type: GET_CRYPTO_LIST_REQUEST,
})

export const getCryptoListClearStateAction = () => ({
  type: GET_CRYPTO_LIST_CLEAR,
})

function* getCryptoListActionWorker() {
  try {
    const response: CryptocurrencyList = yield call(getAPI, `${Config.CURRENCY_LIST}`)
    yield put({type: GET_CRYPTO_LIST_SUCCESS, payload: response})
  } catch (error: any) {
    yield put({type: GET_CRYPTO_LIST_ERROR, payload: error})
  }
}

export function* watchCryptoListAction() {
  yield takeLatest(GET_CRYPTO_LIST_REQUEST, getCryptoListActionWorker)
}

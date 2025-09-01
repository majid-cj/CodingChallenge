import {axiosInstance} from './network'

export const postAPI = async <TPayload, TResponse>(url: string, payload: TPayload): Promise<TResponse> => {
  const {data} = await axiosInstance.post(url, payload)
  return Promise.resolve(data) as TResponse
}

export const getAPI = async <TResponse>(url: string): Promise<TResponse> => {
  const {data} = await axiosInstance.get(url)
  return Promise.resolve(data) as TResponse
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from './axios'
import type { Method as AxiosMethod } from 'axios'

export interface ApiResult<T> {
  code: number | string
  msg: string
  data: T
}

type Method = AxiosMethod

type DataType = 'json' | 'JSON' | 'form' | 'FORM' | 'file' | 'FILE'

export async function get<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstance.get<ApiResult<T>>(url, { params })
  return response.data
}
export async function post<T>(url: string, data?: any): Promise<ApiResult<T>> {
  const response = await axiosInstance.post<ApiResult<T>>(url, data)
  return response.data
}
export async function put<T>(url: string, data?: any): Promise<ApiResult<T>> {
  const response = await axiosInstance.put<ApiResult<T>>(url, data)
  return response.data
}
export async function del<T>(url: string, params?: any): Promise<ApiResult<T>> {
  const response = await axiosInstance.delete<ApiResult<T>>(url, { params })
  return response.data
}
export async function uploadFiles<T>(url: string, formData: FormData): Promise<ApiResult<T>> {
  const response = await axiosInstance.post<ApiResult<T>>(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export async function request<T>(
  url: string,
  method: Method,
  data: any,
  dataType: DataType = 'JSON',
  headers: { [key: string]: string } = {},
): Promise<ApiResult<T>> {
  let payload: any = {
    url,
    method,
    data,
    dataType,
    headers,
  }
  if (dataType.toLowerCase() == 'json') {
    payload.headers['Content-Type'] = 'application/json'
    payload.transformRequest = [(data: any) => JSON.stringify(data)]
  } else {
    payload.headers['Content-Type'] = ''
  }
  const response = await axiosInstance.request<ApiResult<T>>(payload)
  return response.data
}

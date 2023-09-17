import { defineStore } from 'pinia'
//@ts-ignore
import { del, get, post, put, uploadFiles } from '@/api'

export interface IUser {
  [key: string]: string | number | boolean | string[]
  username: string
  password: string
  rememberMe: boolean
  age: number
  friends: string[]
}

export interface ILoginPostParams {
  [key: string]: string
  username: string
  password: string
}

export const useLoginStore = defineStore('LoginStore', {
  state: () => ({
    user: {} as IUser,
    error: '',
    isLogined: false,
    loading: false,
  }),

  actions: {
    async login(params?: ILoginPostParams) {
      this.loading = true
      this.error = ''
      try {
        const url = `/login`
        const res = await post<IUser>(url, params)
        if (res.code !== 0) {
          throw new Error(res.msg)
        }
        this.user = res.data
      } catch (error: any) {
        this.error = error.toString()
      } finally {
        this.loading = false
      }
    },
  },
})

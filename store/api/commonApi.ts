import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN_KEY } from '@/utils/constants'

// @ts-ignore
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://pokeapi.co/api/v2/',
  prepareHeaders: (headers) => {
    const token = Cookies.get(ACCESS_TOKEN_KEY)
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  // @ts-ignore
  if (result.error && result.error.status === 401) {
    // try to get a new token
    // const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
    Cookies.remove(ACCESS_TOKEN_KEY)
    //     // window.location.href = '/login'
  }
  return result
}

export const commonApi = createApi({
  reducerPath: 'commonApi',
  tagTypes: ['Todos'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})

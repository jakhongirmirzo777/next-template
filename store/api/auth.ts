import Cookies from 'js-cookie'
import { commonApi } from '@/store/api/commonApi'
import { ACCESS_TOKEN_KEY } from '@/utils/constants'
import { setUser, User } from '@/store/slices/user'

export interface LoginUser {
  username: string
  password: string
}

export interface LoginUserResponse {
  access_token: string
  refresh_token: string
}

export const authApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginUserResponse, LoginUser>({
      query(body) {
        return {
          url: '/auth/login',
          method: 'POST',
          body,
        }
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          Cookies.set(ACCESS_TOKEN_KEY, data.access_token)
        } catch (error) {
          console.error(error)
        }
      },
    }),
    getUser: builder.query<User, void>({
      query: () => '/auth/me',
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled
          // @ts-ignore
          dispatch(setUser(data))
        } catch (error) {
          console.error(error)
        }
      },
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery, useLoginUserMutation } =
  authApi

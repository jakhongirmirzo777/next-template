import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commonApi = createApi({
  reducerPath: 'commonApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
})

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productsApi = createApi({
  reducerPath: 'produtcs',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
   getAllProducts: builder.query({
      query: (name) => `products`,
    }),
  }),
})


export const {useGetAllProductsQuery} = productsApi 
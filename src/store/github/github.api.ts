import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { SearchUsersResponse, IUser, IRepository } from '../../models/model'

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search,
                    // per_page: 10
                }
            }), 
            transformResponse: (response: SearchUsersResponse) => response.items
         }),
         getUserRepos: build.query<IRepository[], string>({
             query: (username: string) => ({
                url: `users/${username}/repos`
            })
         }),
         getUser: build.query<IUser, string>({
             query: (username: string) => ({
                 url: `users/${username}`
             })
         })
    })
})

export const {useSearchUsersQuery, useGetUserReposQuery, useGetUserQuery} = githubApi

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {DetailsResponse, ServerResponse} from "../models/models";

export const charactersApi = createApi({
    reducerPath:'characters/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://rickandmortyapi.com/api/'
    }),
    endpoints : builder => ({
        getCharacters: builder.query<ServerResponse, number>({
            query:(page) => ({
                url: 'character',
                params:{
                    page:page
                }
            })
        }),
        getEpisodes: builder.query<DetailsResponse, number>({
            query:(episodeNumber) => ({
                url: `episode/${episodeNumber}`,
            })
        }),
        getLocations: builder.query<DetailsResponse, number>({
            query:(locationNumber) => ({
                url: `location/${locationNumber}`,

            })
        }),

    })
})

export const { useGetCharactersQuery, useLazyGetEpisodesQuery, useLazyGetLocationsQuery } = charactersApi
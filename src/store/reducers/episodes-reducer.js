import React from 'react'
import {characterAPI, episodeAPI, locationAPI} from "../../api/api.js";

const GET_EPISODES = 'GET_EPISODES'

export const getEpisodes = (episodes) => ({type:GET_EPISODES , payload:{episodes}})

export const requestEpisodes = () => {
    return async (dispatch) => {
        const response = await episodeAPI.allEpisodes()
        dispatch(getEpisodes(response.data.results))
    }
}

const initialState ={
    episodes:[]
}

const episodesReducer = (state = initialState,action) => {
  switch (action.type) {
      case GET_EPISODES:{
          return{
              ...state, ...action.payload
          }
      }
      default:
          return state
  }
}

export default episodesReducer

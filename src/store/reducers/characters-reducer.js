import React from 'react'
import {characterAPI} from "../../api/api.js";

const GET_CHARACTERS = 'GET_CHARACTERS'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'

export const getCharacters = (characters) => ({type:GET_CHARACTERS , payload:{characters}})
export const setPagesCount = (pagesCount) => ({type:SET_PAGES_COUNT , payload:{pagesCount}})


export const requestCharacters = (currentPage) => {
    return async (dispatch) => {
        const response = await characterAPI.allCharacters(currentPage)
        dispatch(getCharacters(response.data.results))
       dispatch(setPagesCount(response.data.info.pages))
    }
}

const initialState ={
    characters:[],
    pagesCount:0
}

const charactersReducer = (state = initialState,action) => {
  switch (action.type) {
      case GET_CHARACTERS:
      case SET_PAGES_COUNT:
      {
          return{
              ...state, ...action.payload
          }
      }
      default:
          return state
  }
}

export default charactersReducer

import React from 'react'
import {characterAPI} from "../../api/api.js";

const GET_CHARACTERS = 'GET_CHARACTERS'

export const getCharacters = (characters) => ({type:GET_CHARACTERS , payload:{characters}})

export const requestCharacters = () => {
    return async (dispatch) => {
        const response = await characterAPI.allCharacters()
        dispatch(getCharacters(response.data.results))
    }
}

const initialState ={
    characters:[]
}

const charactersReducer = (state = initialState,action) => {
  switch (action.type) {
      case GET_CHARACTERS:{
          return{
              ...state, ...action.payload
          }
      }
      default:
          return state
  }
}

export default charactersReducer

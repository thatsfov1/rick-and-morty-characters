import React from 'react'
import {characterAPI, locationAPI} from "../../api/api.js";

const GET_LOCATIONS = 'GET_LOCATIONS'

export const getLocations = (locations) => ({type:GET_LOCATIONS , payload:{locations}})

export const requestLocations = () => {
    return async (dispatch) => {
        const response = await locationAPI.allLocations()
        dispatch(getLocations(response.data.results))
    }
}

const initialState ={
    locations:[]
}

const locationsReducer = (state = initialState,action) => {
  switch (action.type) {
      case GET_LOCATIONS:{
          return{
              ...state, ...action.payload
          }
      }
      default:
          return state
  }
}

export default locationsReducer

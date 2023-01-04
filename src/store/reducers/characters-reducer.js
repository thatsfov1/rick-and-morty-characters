import React from 'react'
import {characterAPI} from "../../api/api.js";

const GET_CHARACTERS = 'GET_CHARACTERS'
const SET_PAGES_COUNT = 'SET_PAGES_COUNT'
const FILTER_BY_STATUS = 'FILTER_BY_STATUS'
const FILTER_BY_GENDER = 'FILTER_BY_GENDER'
const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH'
const FILTER_BY_SEARCH_TYPE = 'FILTER_BY_SEARCH_TYPE'
const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS'


export const getCharacters = (characters) => ({type: GET_CHARACTERS, payload: {characters}})
export const setPagesCount = (pagesCount) => ({type: SET_PAGES_COUNT, payload: {pagesCount}})
export const setStatus = (status) => ({type: FILTER_BY_STATUS, payload: status})
export const setGender = (gender) => ({type: FILTER_BY_GENDER, payload: gender})
export const setSearch = (searchText) => ({type: FILTER_BY_SEARCH, payload:searchText})
export const setSearchBy = () => ({type: FILTER_BY_SEARCH_TYPE})
export const clearFilters = () => ({type: CLEAR_ALL_FILTERS})


export const requestCharacters = (currentPage) => {
    return async (dispatch) => {
        const response = await characterAPI.allCharacters(currentPage)
        dispatch(getCharacters(response.data.results))
        dispatch(setPagesCount(response.data.info.pages))
    }
}

const initialState = {
    characters: [],
    pagesCount: 0,
    searchQuery:'',
    searchBy:false
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
        case SET_PAGES_COUNT: {
            return {
                ...state, ...action.payload
            }
        }
        case FILTER_BY_STATUS:{
            return{
                ...state, status:action.payload
            }
        }
        case FILTER_BY_SEARCH_TYPE:{
            return{
                ...state, searchBy:!state.searchBy
            }
        }
        case FILTER_BY_GENDER:{
            return{
                ...state, gender:action.payload
            }
        }
        case FILTER_BY_SEARCH:{
            return{
                ...state, searchQuery:action.payload
            }
        }
        case CLEAR_ALL_FILTERS:{
            return{
                ...state,
                searchQuery: '',
                searchBy:false,
                gender:false,
                status:false,
            }
        }

        default:
            return state
    }
}

export default charactersReducer

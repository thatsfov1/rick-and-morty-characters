import axios from "axios";

export const instance = axios.create({
    baseURL:"https://rickandmortyapi.com/api"
})

export const characterAPI = {
    allCharacters(currentPage = 1){
        return  instance.get(`/character?page=${currentPage}`)
    }
}
export const locationAPI = {
    allLocations(currentPage = 1){
        return  instance.get(`/location?page=${currentPage}`)
    }
}

export const episodeAPI = {
    allEpisodes(currentPage = 1){
        return  instance.get(`/episode?page=${currentPage}`)
    }
}
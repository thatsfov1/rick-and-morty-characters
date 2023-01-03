import axios from "axios";

export const instance = axios.create({
    baseURL:"https://rickandmortyapi.com/api"
})

export const characterAPI = {
    allCharacters(){
        return  instance.get('/character')
    }
}
export const locationAPI = {
    allLocations(){
        return  instance.get('/location')
    }
}

export const episodeAPI = {
    allEpisodes(){
        return  instance.get('/episode')
    }
}
import React, {useState} from "react";
import s from './Characters.module.css'
import MapContentToCard from "../CharacterItems/MapContentToCard";
import BasicPagination from "../CharacterItems/Pagination";
import Filters from "../CharacterItems/Filters";
import title from '../../assets/title.png'
import {useGetCharactersQuery} from "../../store/characters.api";

type Props = {
    searchBy:boolean,
    search:string
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setSearchBy: React.Dispatch<React.SetStateAction<boolean>>
}

const Characters = ({ searchBy, search, setSearch, setSearchBy } :Props) => {

    const [page, setPage] = useState(1);
    const [status, setStatus] = useState<string>();
    const [gender, setGender] = useState<string>();

    const {isLoading, isError, data} = useGetCharactersQuery(page)

    const transformCharacters = () => {
        let filterCharacters = data?.results

        if (status) {
            status === "Alive" ? filterCharacters = filterCharacters?.filter(c => c.status === 'Alive')
                : status === "Dead" ? filterCharacters = filterCharacters?.filter(c => c.status === 'Dead') :
                    filterCharacters = filterCharacters?.filter(c => c.status === 'unknown')
        }
        if (gender) {
            gender === "Male" ? filterCharacters = filterCharacters?.filter(c => c.gender === 'Male')
                : gender === "Female" ? filterCharacters = filterCharacters?.filter(c => c.gender === 'Female') :
                    filterCharacters = filterCharacters?.filter(c => c.gender === 'unknown')
        }
        if (search) {
            searchBy ? filterCharacters = filterCharacters?.filter(c => c.location.name.toLowerCase().includes(search))
                : filterCharacters = filterCharacters?.filter(c => c.name.toLowerCase().includes(search))
        }

        return filterCharacters
    }

    return <div className={s.characters}>
        <img alt='character' className={s.image} src={title} width="60%"/>
        <span className={s.title}>Characters</span>
        <Filters setSearch={setSearch} setSearchBy={setSearchBy} gender={gender}
                 setGender={setGender} status={status} setStatus={setStatus}/>
        {isLoading && <p>Loading...</p> }
        <MapContentToCard content={transformCharacters()}/>
        <BasicPagination setPage={setPage}/>
    </div>;
}


export default Characters

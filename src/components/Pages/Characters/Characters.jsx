import React, {useEffect, useState} from "react";
import s from './Characters.module.css'
import {connect} from "react-redux";
import {requestCharacters} from "../../../store/reducers/characters-reducer.js";
import MapContentToCard from "../PagesItems/MapContentToCard.jsx";
import BasicPagination from "../PagesItems/Pagination.jsx";
import Filters from "../PagesItems/Filters.jsx";
import title from '../../../assets/title.png'

const Characters = ({characters, requestCharacters, pagesCount, status, gender, searchBy, searchQuery}) => {

    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        requestCharacters(currentPage)
    }, [currentPage])

    const transformCharacters = () => {
        let filterCharacters = characters

        if (status) {
            status === "Alive" ? filterCharacters = filterCharacters.filter(c => c.status === 'Alive')
                : status === "Dead" ? filterCharacters = filterCharacters.filter(c => c.status === 'Dead') :
                    filterCharacters = filterCharacters.filter(c => c.status === 'unknown')
        }
        if (gender) {
            gender === "Male" ? filterCharacters = filterCharacters.filter(c => c.gender === 'Male')
                : gender === "Female" ? filterCharacters = filterCharacters.filter(c => c.gender === 'Female') :
                    filterCharacters = filterCharacters.filter(c => c.gender === 'unknown')
        }
        if (searchQuery) {
            searchBy ? filterCharacters = filterCharacters.filter(c => c.location.name.toLowerCase().includes(searchQuery))
                : filterCharacters = filterCharacters.filter(c => c.name.toLowerCase().includes(searchQuery))
        }

        return filterCharacters
    }

    return <div className={s.characters}>
        <img className={s.image} src={title} width="500px"/>
        <span className={s.title}>Characters</span>
        <Filters/>
        <MapContentToCard
            content={transformCharacters()}
        />
        {transformCharacters().length > 1
            ? <BasicPagination setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
            : <div style={{color: "rgba(0,0,0,0.5)", fontSize: '60px', textAlign: 'center'}}>No results</div>}
    </div>;
}


const mapStateToProps = (state) => {
    return {
        characters: state.charactersReducer.characters,
        pagesCount: state.charactersReducer.pagesCount,
        searchBy: state.charactersReducer.searchBy,
        searchQuery: state.charactersReducer.searchQuery,
        status: state.charactersReducer.status,
        gender: state.charactersReducer.gender,
    }
}

export default connect(mapStateToProps, {requestCharacters})(Characters);

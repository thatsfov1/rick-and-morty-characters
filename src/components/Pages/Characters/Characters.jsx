import React, {useEffect, useState} from "react";
import s from './Characters.module.css'
import {connect} from "react-redux";
import {requestCharacters} from "../../../store/reducers/characters-reducer.js";
import MapContentToCard from "../PagesItems/MapContentToCard.jsx";
import BasicPagination from "../PagesItems/Pagination.jsx";

const Characters = (props) => {

    const [currentPage,setCurrentPage] = useState(1)

    useEffect(()=>{
        props.requestCharacters(currentPage)
    },[currentPage])

    return <div className={s.characters}>
        <span className={s.title}>Characters</span>
                <MapContentToCard content={props.characters}/>
        <BasicPagination setCurrentPage={setCurrentPage} pagesCount={props.pagesCount}/>
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        characters:state.charactersReducer.characters,
        pagesCount:state.charactersReducer.pagesCount,

    }
}

export default connect(mapStateToProps,{requestCharacters})(Characters);

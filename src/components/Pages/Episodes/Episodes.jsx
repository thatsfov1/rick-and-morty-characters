import React, {useEffect, useState} from "react";
import s from "../Characters/Characters.module.css";
import {connect} from "react-redux";
import MapContentToCard from "../PagesItems/MapContentToCard.jsx";
import {requestEpisodes} from "../../../store/reducers/episodes-reducer.js";
import BasicPagination from "../PagesItems/Pagination";


const Episodes = (props) => {
    useEffect(()=>{
        props.requestEpisodes()
    },[])

    return <div className={s.characters}>
        <span className={s.title}>Episodes</span>
        <MapContentToCard content={props.episodes}/>
        <BasicPagination/>
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        episodes:state.episodesReducer.episodes
    }
}

export default connect(mapStateToProps,{requestEpisodes})(Episodes);


import React, {useEffect} from "react";
import s from "../Characters/Characters.module.css";
import MapContentToCard from "../PagesItems/MapContentToCard.jsx";
import {connect} from "react-redux";
import {requestLocations} from "../../../store/reducers/locations-reducer.js";
import BasicPagination from "../PagesItems/Pagination";

const Locations = (props) => {
    useEffect(()=>{
        props.requestLocations()
    },[])

    return <div className={s.characters}>
        <span className={s.title}>Locations</span>
        <MapContentToCard content={props.locations}/>
        <BasicPagination/>
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        locations:state.locationsReducer.locations
    }
}

export default connect(mapStateToProps,{requestLocations})(Locations);


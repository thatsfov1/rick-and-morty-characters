import React, {useEffect, useState} from "react";
import s from './Characters.module.css'
import {connect} from "react-redux";
import {requestCharacters} from "../../store/reducers/characters-reducer.js";
import Card from "../Card/Card.jsx";
import axios from "axios";

const Characters = (props) => {

    useEffect(()=>{
        props.requestCharacters()
    },[])

    return <div className={s.characters}>
        <span className={s.title}>Characters</span>
            <div className={s.content}>
                {props.characters && props.characters.map(c => <Card key={c.id} id={c.id} image={c.image}
                                                                     status={c.status} name={c.name}
                    gender={c.gender} species={c.species}
                />)}
            </div>
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        characters:state.charactersReducer.characters
    }
}

export default connect(mapStateToProps,{requestCharacters})(Characters);

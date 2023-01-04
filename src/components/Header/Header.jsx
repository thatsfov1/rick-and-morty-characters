import React from "react";
import s from "./Header.module.css";
import logo from '../../assets/logo.png'
import {createTheme, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {setSearch, setSearchBy} from "../../store/reducers/characters-reducer.js";

const Header = (props) => {

    const theme = createTheme({
        palette:{
            type:'light',
            primary:{
                main:'#fff'

            }

        }
    })
    return <div className={s.header}>
        <div className={s.logo} onClick={()=> window.scroll(0,0)}>
                <img on className={s.image} src={logo} alt="logo"/>
        </div>
        <Form.Control
            type="search"
            placeholder="Search"
            style={{width:500}}
            onChange={(e) => props.setSearch(e.target.value)}
            className="m-auto"
        />
        <FormGroup>
            <FormControlLabel  control={<Switch onChange={() => props.setSearchBy()} color='success' checked={props.searchBy}/>} label="Search by Location" />
        </FormGroup>
    </div>;
}

const mapStateToProps = (state) =>{
    return{
        searchBy:state.charactersReducer.searchBy
    }
}

export default connect(mapStateToProps, {setSearch,setSearchBy})(Header);

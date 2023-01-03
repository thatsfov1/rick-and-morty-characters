import React from "react";
import s from "./Header.module.css";
import logo from '../../assets/logo.png'
import {createTheme, TextField, ThemeProvider} from "@mui/material";
import {Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";

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
        <div className={s.logo}>
            <NavLink to={'/'}>
                <img className={s.image} src={logo} alt="logo"/>
            </NavLink>
            <div className={s.dropdowns}>
                <NavLink to={'/'}>
                    <button>Characters</button>
                </NavLink>
                <NavLink to={'/locations'}>
                    <button>Locations</button>
                </NavLink>
                <NavLink to={'/episodes'}>
                    <button>Episodes</button>
                </NavLink>
            </div>
        </div>
        <Form.Control
            type="search"
            placeholder="Search"
            style={{width:400}}
            className="m-auto"
        />
    </div>;
}

export default Header;

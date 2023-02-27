import React, {useState} from "react";
import s from "./Header.module.css";
import logo from '../../assets/logo.png'
import { FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Form} from "react-bootstrap";

type Props = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    searchBy:boolean,
    setSearchBy: React.Dispatch<React.SetStateAction<boolean>>
}


const Header = ({search , setSearch,searchBy, setSearchBy}:Props) => {

    return <div className={s.header}>
        <div className={s.logo} onClick={()=> window.scroll(0,0)}>
                <img className={s.image} src={logo} alt="logo"/>
        </div>
        <Form.Control
            type="search"
            value={search}
            placeholder="Search"
            style={{width:500}}
            onChange={(e) => setSearch(e.target.value)}
            className="m-auto"
        />
        <FormGroup>
            <FormControlLabel  control={<Switch onChange={() => setSearchBy(!searchBy)} color='success' checked={searchBy}/>} label="Search by Location" />
        </FormGroup>
    </div>;
}

export default Header;

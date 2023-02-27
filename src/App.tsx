import React, {useState} from "react";
import './App.css'
import {Container} from "@mui/material";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";



const App = () => {

    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState(false);

    return (
    <div className="app">
            <Header search={search} setSearchBy={setSearchBy} searchBy={searchBy} setSearch={setSearch}/>
                <div className="container">
                    <Container>
                        <Characters setSearchBy={setSearchBy} setSearch={setSearch} search={search} searchBy={searchBy}/>
                    </Container>
                </div>
    </div>
  )
}

export default App

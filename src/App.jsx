import './App.css'
import {Container} from "@mui/material";
import Header from "./components/Header/Header.jsx";
import Characters from "./components/Characters/Characters.jsx";



const App = () => {

  return (
    <div className="app">
            <Header/>
                <div className="container">
                    <Container>
                        <Characters/>
                    </Container>
                </div>
    </div>
  )
}

export default App

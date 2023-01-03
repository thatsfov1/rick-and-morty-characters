import './App.css'
import {Container} from "@mui/material";
import Header from "./components/Header/Header.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Characters from "./components/Characters/Characters.jsx";

const App = () => {

  return (
    <div className="app">
        <BrowserRouter>
            <Header/>
                <div className="container">
                    <Container>
                    <Routes>
                        <Route path={'/'} exact element={<Characters/>}/>
                    </Routes>
                    </Container>
                </div>

        </BrowserRouter>
    </div>
  )
}

export default App

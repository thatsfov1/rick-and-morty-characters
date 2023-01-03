import './App.css'
import {Container} from "@mui/material";
import Header from "./components/Header/Header.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Characters from "./components/Pages/Characters/Characters.jsx";
import Locations from "./components/Pages/Locations/Locations";
import Episodes from "./components/Pages/Episodes/Episodes";

const App = () => {

  return (
    <div className="app">
        <BrowserRouter>
            <Header/>
                <div className="container">
                    <Container>
                    <Routes>
                        <Route path={'/'} exact element={<Characters/>}/>
                        <Route path={'/locations'} element={<Locations/>}/>
                        <Route path={'/episodes'} element={<Episodes/>}/>
                    </Routes>
                    </Container>
                </div>

        </BrowserRouter>
    </div>
  )
}

export default App

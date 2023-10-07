import Header from "./components/headers/Header";
import Home from './components/Home/Home';
import {Box} from "@mui/material"
import {BrowserRouter,  Routes,Route}  from "react-router-dom"
import Singlepage from "./components/Singlepage/Singlepage";
import Footer from "./components/Footer/Footer";

import DataProvider from "./context/ContextProvider";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path="/" element={<Home/>}/>  
            <Route path="/product/:id" element ={<Singlepage/>}/>
        </Routes>
      </Box>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

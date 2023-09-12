import Header from "./components/headers/Header";
import Home from './components/Home/Home';
import {Box} from "@mui/material"

import DataProvider from "./context/ContextProvider";
function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:54}}>
       <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;

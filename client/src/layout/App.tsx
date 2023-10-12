import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Catalog from '../features/Catalog/Catalog';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';




function App() {
function handleThemeChange()
{ 
 setDarkMode(!darkMode);
}
  const[darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' :'light';
  const theme = createTheme({
  palette: {
  mode:paletteType,
  background :{
  default: paletteType ==='light' ?'#eaeaea':'#121212'
  }
  }
  })
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header darkMode ={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
    <Catalog/>
    </Container>
    
    </ThemeProvider>
  );
}

export default App;

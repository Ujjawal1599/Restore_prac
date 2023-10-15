import { useState } from 'react';
import './App.css';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';




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
    <Outlet />
    </Container>
    
    </ThemeProvider>
  );
}

export default App;

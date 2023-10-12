import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Prop {
    darkMode:boolean,
    handleThemeChange:() => void;
    
}
export default function Header({darkMode,handleThemeChange}:Prop)
{
    return(
        <AppBar sx={{mb :4}}>
            <Toolbar>
                <Typography variant="h6">
                    Shell Selects
                </Typography>
                <Switch
                checked ={darkMode}
                onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks =[
    {title: 'catalog',path:'/catalog'},
    {title: 'contact',path:'/contact'},
    {title: 'about',path:'/about'}
]

const rightLinks =[
    {title: 'login',path:'/login'},
    {title: 'register',path:'/register'}
]
const navStyles ={ color:'inherit' , typography:'h6',textDecoration:'none', '&:hover':{
    color:'grey.500'
},
'&.active':{
    color:'text.secondary'
}}

interface Prop {
    darkMode:boolean,
    handleThemeChange:() => void;
    
}
export default function Header({darkMode,handleThemeChange}:Prop)
{
    return(
        <AppBar  position ="static" sx={{mb :4}}>
            <Toolbar sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                <Typography variant="h6" component={NavLink} to={'/'}
                sx={navStyles}>
                    Shell Selects
                </Typography>
                <Switch
                checked ={darkMode}
                onChange={handleThemeChange}/>
                </Box>

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title,path})=> (
                        <ListItem component={NavLink}
                        to={path}
                        key={path}
                        sx ={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems= 'center' >
                <IconButton size ='large' edge='start' color='inherit' sx ={{mr :2 }}>
                    <Badge badgeContent="4" color='secondary'>
                        <ShoppingCart>

                        </ShoppingCart>
                    </Badge>
                </IconButton>
                <List sx={{display:'-webkit-flex'}}>
                {rightLinks.map(({title,path})=> (
                        <ListItem component={NavLink}
                        to={path}
                        key={path}
                        sx ={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
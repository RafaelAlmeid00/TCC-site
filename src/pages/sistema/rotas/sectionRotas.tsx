import { Avatar, Box, Button, Container, IconButton, InputLabel, Typography, TextField, colors } from "@mui/material"
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { removeToken, verify } from "../../../components/sistema/FrontDecoded";
import  color from "../../../assets/colors";
import MenuLateral from "../../../components/menu/menulateral";
import MenuSistema from "../../../components/menu/menusistema";
import { Margin } from "@mui/icons-material";


function SectionRota1() {
    return (
        <>  
            <MenuSistema></MenuSistema>
            <MenuLateral></MenuLateral>
           <Box sx={{
                ml: '25vw',
                height: '11.99vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20vw',
                backgroundColor: color.pm,
                '&:hover': {
                    backgroundColor: color.sc,
                    opacity: [1, 0.9, 0.8]
                },
                marginTop: '18vh',
           }}>
                <Container sx={{
                     ml: '0vh',
                     height: '10.99vh',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '31vw',
                     backgroundColor: '#FAF0E4',
                     marginTop: '0px'
                }}><TextField id="standard-basic" label="Linha do ônibus" variant="standard" focused sx={{
                    width: '200px',
                    color: "warning",
                    paddingBottom: '10px'
                }} /></Container>
           </Box>
           <Box sx={{
                ml: '55vw',
                height: '11.99vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20vw',
                backgroundColor: color.pm,
                '&:hover': {
                    backgroundColor: color.sc,
                    opacity: [1, 0.9, 0.8]
                },
                marginTop: '1vh',
           }}>
                <Container sx={{
                     ml: '0vh',
                     height: '10.99vh',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     width: '31vw',
                     backgroundColor: '#FAF0E4',
                     marginTop: '0px'
                }}><TextField id="standard-basic" label="Linha do ônibus" variant="standard" focused sx={{
                    width: '200px',
                    color: "warning",
                    paddingBottom: '10px'
                }} /></Container>
           </Box>
        </>
    )
}

export default SectionRota1
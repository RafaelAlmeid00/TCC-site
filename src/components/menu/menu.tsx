import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../../assets/colors";
import theme from "../../assets/theme";
import React from "react";
import ModalContext from "../../context/modalcontext";

interface Props {
    mt: string; // Propriedade 'mt' do tipo string
    ml: string; // Propriedade 'ml' do tipo string
    onClick: () => void; // Propriedade 'onClick' que é uma função sem parâmetros e sem retorno
}


export default function Menus({ mt, ml, onClick }: Props) {

    const { verify } = React.useContext(ModalContext);
    const pg = [
        { name: "Para Escolas", route: "/Escolas" },
        { name: "Para Empresas", route: "/Empresas" }
    ];
    const [selectedPage, setSelectedPage] = useState(pg[0].route); // define a primeira página como selecionada
    function getPageStyles(pageRoute: string) {
        const isSelected = pageRoute === selectedPage;
        const color = verify ? (isSelected ? colors.sc : 'white') : (isSelected ? colors.tc : colors.pm);
        return { color };
    }


    return (
        <Box sx={{
            mt: mt, ml: ml,
            [theme.breakpoints.down('lg')]: {
                ml: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                mt: 10
            },
            maxHeight: '100%',
            maxWidth: '100%',
            textAlign: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                {pg.map((pg) => (
                    <Button
                        key={pg.route}
                        onClick={() => { setSelectedPage(pg.route); onClick() }}
                        sx={{ margin: '0 15px', ...getPageStyles(pg.route), 
                    }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{ fontWeight: "bold", fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '1.3vw',  // (7.5 / 1200) * 1200
                                lg: '1.2vw',
                                xl: '1vw', 
                            }, }}
                        >
                            {pg.name}
                        </Typography>
                    </Button>
                ))}
            </Box>
            <Box sx={{
                width: "100%",
                height: "2px",
                backgroundColor: verify ? 'black' : colors.scsd,
                marginTop: "8px",
                position: "relative",
                [theme.breakpoints.down('md')]: {
                    width: "100%",
                },
            }}
            >
                <Box
                    sx={{

                        width: '50%',
                        height: "100%",
                        backgroundColor: verify ? colors.sc : colors.tcsd,
                        position: "absolute",
                        left: selectedPage === "/Escolas" ? '0%' : "50%",
                        transition: "left 0.3s ease-out",
                    }}
                />
            </Box>
        </Box>
    );
}
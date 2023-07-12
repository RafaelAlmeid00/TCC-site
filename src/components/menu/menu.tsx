import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../../assets/colors";
import theme from "../../assets/theme";
import React from "react";
import ModalContext from "../../context/modalcontext";

export default function Menus({ sz, mt, ml, onClick }) {

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
            [theme.breakpoints.down('md')]: {
                ml: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                mt: 10
            },
        }}>
            <Box sx={{
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                width: {
                    xs: '1vw',  // (7.5 / 1200) * 600
                    sm: '1.7vw',  // (7.5 / 1200) * 900
                    md: '2vw',  // (7.5 / 1200) * 1200
                    lg: '44vw',
                    xl: '35vw',  // Manter o mesmo tamanho de lg para xl
                }
            }}>
                {pg.map((pg) => (
                    <Button
                        key={pg.route}
                        onClick={() => { setSelectedPage(pg.route); onClick() }}
                        sx={{ margin: "0 16px", ...getPageStyles(pg.route), 
                            [theme.breakpoints.only('sm')]: {
                                margin: "0 100px"
                            },
                            [theme.breakpoints.only('xs')]: {
                                margin: "0 50px"
                            },
                    }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{ fontWeight: "bold", fontSize: {
                                xs: '2.5vw',  // (7.5 / 1200) * 600
                                sm: '2vw',  // (7.5 / 1200) * 900
                                md: '2vw',  // (7.5 / 1200) * 1200
                                lg: '1.5vw',
                                xl: '1vw', 
                            } }}
                        >
                            {pg.name}
                        </Typography>
                    </Button>
                ))}
            </Box>
            <Box sx={{
                width: "400px",
                height: "2px",
                backgroundColor: verify ? 'black' : colors.scsd,
                marginTop: "8px",
                position: "relative",
                ml: 10,
                [theme.breakpoints.down('md')]: {
                    ml: 0,
                    width: "100%",
                },
            }}
            >
                <Box
                    sx={{
                        [theme.breakpoints.down('sm')]: {
                            width: "47vw",
                        },
                        ml: {
                            xs: '-20vw', sm: '-20vw', md: '-28vw', lg: -10
                        },
                        width: '50%',
                        height: "100%",
                        backgroundColor: verify ? colors.sc : colors.tcsd,
                        position: "absolute",
                        left: selectedPage === "/Escolas" ? '20%' : "70%",
                        transition: "left 0.3s ease-out",
                    }}
                />
            </Box>
        </Box>

    );
}
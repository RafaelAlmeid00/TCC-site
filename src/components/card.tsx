import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import colors from "../assets/colors";
import theme from "../assets/theme";
import React from "react";
import ModalContext from "../context/modalcontext";

export default function Cards({ image, title, text, wd, hg, mt, ml }) {
    const { verify } = React.useContext(ModalContext);

    return (
        <>
            <Card sx={{
                width: wd, mt: mt, ml: ml, borderRadius: "20px", border: '1px solid', borderColor: verify ? 'white' : colors.sc,
                [theme.breakpoints.down('lg')]: {
                    maxWidth: '25vw',
                    maxHeight: '300px',
                    ml: 2,
                    mb: 10
                },
                [theme.breakpoints.only('md')]: {
                    maxWidth: '15vw',
                },
                [theme.breakpoints.only('xs')]: {
                    maxWidth: '23vw',
                },
                [theme.breakpoints.only('xl')]: {
                    maxWidth: '35vw',
                },
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={hg}
                        src={image}

                        sx={{
                            [theme.breakpoints.down('lg')]: {
                                height: '100px'
                            },
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{
                                fontSize: { xs: '3vw', sm: '2vw', md: '2vw', lg: '1.5vw', xl: '1.8vw' },
                                mb: 1.5,
                                textAlign: 'center'
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            textAlign: 'center',
                            [theme.breakpoints.down('sm')]: {
                                display: 'none'
                            },
                        }}>
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
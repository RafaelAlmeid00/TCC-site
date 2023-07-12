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
                [theme.breakpoints.down('md')]: {
                    maxWidth: '25vw',
                    maxHeight: '300px',
                    ml: 2,
                    mb: 10
                },
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={hg}
                        src={image}

                        sx={{
                            [theme.breakpoints.down('md')]: {
                                height: '100px'
                            },
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: { xs: '1.5vh', sm: '2vh', md: '2.5vh', lg: '3vh', xl: '3vh' },
                            },
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
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
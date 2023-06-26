import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import colors from "../assets/colors";
import theme from "../assets/theme";

export default function Cards({ image, title, text, wd, hg, mt, ml }) {
    return (
        <>
            <Card sx={{
                width: wd, mt: mt, ml: ml, borderRadius: "20px", border: '1px solid', borderColor: colors.sc,
                [theme.breakpoints.down('sm')]: {
                    maxWidth: '100px',
                    maxHeight: '300px',
                    ml: 2.5,
                    mb: 10
                },
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={hg}
                        image={image}

                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                height: '100px'
                            },
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: { xs: '1em', sm: '1.2em'}, 
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
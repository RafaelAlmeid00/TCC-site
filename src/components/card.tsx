import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import colors from "../assets/colors";

export default function Cards({image, title, text, wd, hg, mt, ml}) {
return (
    <>
    <Card sx={{ width: wd, mt: mt, ml: ml, borderRadius: "20px", border: '1px solid', borderColor: colors.sc}}>
    <CardActionArea>
        <CardMedia
        component="img"
        height={hg}
        image={image}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {text}
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
    </>
)
}
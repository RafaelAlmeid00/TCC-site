import { CardMedia } from '@mui/material';

// componente para o título com frase
export default function Img({height, image, ml, mr, width }) {
return (
    <CardMedia component="img" sx={{height: height, marginLeft: ml, width: width, mr: mr}} image={image} />
    );
}
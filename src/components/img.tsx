import { CardMedia } from '@mui/material';

interface ImgProps {
    height: string | number;
    image: string;
    ml?: string | number;
    mr?: string | number;
    width?: string | number;
}

// componente para o título com frase
export default function Img({ height, image, ml, mr, width }: ImgProps) {
    return (
        <CardMedia
            component="img"
            sx={{
                height: height,
                marginLeft: ml,
                width: width,
                marginRight: mr,
            }}
            image={image}
        />
    );
}

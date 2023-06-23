import { Box, Card } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Side() {
    const tome = useMediaQuery('(min-width:600px')
    return (
        <>
            <Box sx={{
                width: '20vw',
                height: '100vh',
                marginTop: '10.3vh',
                marginLeft: '20vw',
            }}>
            {`(min-width:600px) matches: ${tome}`}
                <Card />
            </Box>
        </>
    )
}
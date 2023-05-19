import { IconButton, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useNavigate } from 'react-router-dom';

interface ExitProps {
    previousRoute: string;
} 
function Exit(props: ExitProps) {
    const navigate = useNavigate()
    
    function handleGoBack() {
        navigate(props.previousRoute);
    }

    return (
    <>
        <IconButton
            title="Voltar"
            sx={{
            ml: '10px',
            mt: '10px',
            }}
            onClick={handleGoBack}
        >
            <KeyboardDoubleArrowLeftIcon
                sx={{
                color: 'black',
                fontSize: '35px',
                }}
            /><Typography sx={{
                fontSize: '20px',
                }}>Voltar</Typography>
        </IconButton>
    </>
    );
}

export default Exit;

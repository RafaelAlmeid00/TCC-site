import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function MenuSistema(props: any) {

    const navigate = useNavigate()

    return (
        <AppBar sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 20,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Franklin Gothic Demi Cond',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            background: 'linear-gradient(to right, #0fcd88 52%, white 50%)',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}
                    >
                        EasyPass
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontSize: 35,
                            color: 'inherit',
                            fontFamily: 'Franklin Gothic Demi Cond',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            background: 'linear-gradient(to right, #0fcd88 50%, white 50%)',
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}
                    >
                        EasyPass
                    </Typography>
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Balancer from "react-wrap-balancer";

function EquipeEasyPass() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Card sx={{ maxWidth: 160, mr: '20px', ml: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                    />
                    <CardContent>
                        <Balancer>
                            <Typography gutterBottom variant="h5" component="div">
                                Rafael
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Responsável por gerenciar a programação do sistema e a aplicação dele.
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 160, mr: '20px', ml: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                    />
                    <CardContent>
                        <Balancer>
                            <Typography gutterBottom variant="h5" component="div">
                                Thamyres
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Responsável pela administração do TCC e não deixar tudo virar um caos.
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 160, mr: '20px', ml: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                    />
                    <CardContent>
                        <Balancer>
                            <Typography gutterBottom variant="h5" component="div">
                                Igor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Responsável pela programação do servidor e do back-end.
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 160, mr: '20px', ml: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                    />
                    <CardContent>
                        <Balancer>
                            <Typography gutterBottom variant="h5" component="div">
                                João Marcelo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Responsável pela programação do front-end do sistema.
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 160, mr: '20px', ml: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                    />
                    <CardContent>
                        <Balancer>
                            <Typography gutterBottom variant="h5" component="div">
                                Matheus Maia
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                É o Maia.
                            </Typography>
                        </Balancer>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
  );
}

function AgradecimentosAnderson() {
    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
        </Balancer>
  );
}

function PorqueEasyPass() {
    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
                Volta Redonda,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                É uma cidade com grande problemas mobilísticos, o transporte publico é precário, as empresas estão falidas e se insistem em continuar a funcionar por apoio da prefeitura. O sistema do SindPass é retrógrado em relação as demais cidades, sendo pouco transparente, burocrático e sem atendimento ao cidadãos. Nisso nasce a EasyPass com o objetivo de desenvolver essa área de transporte.
            </Typography>
        </Balancer>
  );
}

function AgradecimentosLuciane() {
    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
        </Balancer>
  );
}

function Objetivo() {
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}> 
        <Balancer>
            <Typography gutterBottom variant="h5" component="div" sx={{ mt: '40px'}}>
                Praticidade
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Criar sistemas praticos de recargas, gerenciamento e atendimento ao usuário.
            </Typography>
        </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mt: '40px' }}>
                    Transparência
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Um gerenciamento transparente com o usuário sobre as suas informações.
                </Typography>
            </Balancer>
            <Balancer>
                    <Typography gutterBottom variant="h5" component="div" sx={{ mt: '40px' }}>
                    Avanços
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: '40px'}}>
                    Trazer os avanços tecnológicos para desfruto dos nossos clientes.
                </Typography>
                </Balancer></Box>
        </>
  );
}

function AgradecimentosHenrique() {
    return (
        <Balancer>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
        </Balancer>
  );
}

export {EquipeEasyPass, Objetivo, AgradecimentosAnderson, AgradecimentosLuciane, AgradecimentosHenrique, PorqueEasyPass}
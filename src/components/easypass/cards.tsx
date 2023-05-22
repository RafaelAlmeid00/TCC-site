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
                        image="https://lh3.googleusercontent.com/MiIRtlKwJ01_7dpXOpiBfJ3lUcCYuGijGS5vVhgtjhrXWYLNIrsnKpzEmsaBmP6pItFG4a2m4EGCGjewRKYfWEaIB1_uLLIcbuPdtdwcZ6xiAdDz14rdjq_GwKIqy8vEQqKdzzelX6uLtzq_L7anGxuSc7hEDwD9GR_KcAMGk1mOarQASJ-Kj5wqUvKd0Gwi8cDYLiF5tx-0K4OiEP3j-N9juiTV76U2Catl1BkUHvfILlMbYabyymNhe0QODMbQEJvfA5vuwc50OQLAdSxBeUJlxA4BN1KvJWNhB_TATxakUpBa-OTLir6mUJjk8XScc_SD3ZtruGlFWebwmHZ1rt_lVp883f9QkMvH1J99RtgSy8PDD4yrwX1JZCI_ULJay0WBBDHagIJ-FljT4kJ37IIjmIFfsdB9XCvq0MDwpk9mDF7EPymGCn864zQWfwyMzKYFN7dcQUagJUBRoZTQ9P0x9MR6R6bCZUR_BTDvQiliZW2B_GwzRsSi_tq9JYS6PnSVtP5nhMa6T-wXwxwqarzVZGUfltoLp4pZdMjZ943bcw7eodtwKCiZG9sF5ULCkYkxNT3nRAwVWqE_QPbfnm7iaZe55DiGlz0ZpPW8QYN0YZVUzHki-EFQ-wRcYUawf-O2CRM5ulRdU1cWp2U_JKeoCfywZ-Mi9BVR2iSv9idiDkV_1dcgVAtyDIJVR5KN8bAzMm26ncNhK52PsnMNOHX9dMopCwpbu7lu-5de05COBEEjr1tRstT8YAHTztFLIoIFkgBnpr7muMScs67Zd0lyYCgwFu4HxgzDiF9l4CGXTv7ma1HN7NLDwvnhaMELWGkPkb-nDmnGeq4c1EsRf3RIHXtzoiTHo5hbF_zIYs1jg1buXuMeBjGQuVQu-5X2TkaVucS4dMuw_ebGvmjN59_0RUAubI7Hvs7hb_3CeXBeU_B52VPh1iNMs6GACfFO_bzcsO4vSToxrNCfd0bGhSNq5SVkoRteaQkv3eKYT4rnbEPEhJgtqfGUJJ8ZPUL-NQgFumTpepfP2sE7QYi7QPcqo-tQhQ5eyo-u6iRKZ8fjj58rQUPpyus1YPNn=w500-h625-s-no?authuser=0"
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
                        image="https://pps.whatsapp.net/v/t61.24694-24/347194047_979312703490266_7334242764733853110_n.jpg?ccb=11-4&oh=01_AdSp8KX6FuDKli9sVr7QO6tH0-1QfP3-mE8vd1Xcu0ZERA&oe=6477315C"
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
                        image="https://pps.whatsapp.net/v/t61.24694-24/321235456_1878781622458739_858648601665744145_n.jpg?ccb=11-4&oh=01_AdTyaaw58TXMxVxi65jy5qOEAabyPtVIRgowvH1kCXfGTg&oe=6473C8B6"
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
                        image="https://pps.whatsapp.net/v/t61.24694-24/328733453_885847462648853_3754917657025739304_n.jpg?ccb=11-4&oh=01_AdSqX0T7XW5x7Bqp30BLOGuUzR0KU_YXbwsWm-D07CJzMQ&oe=6473E5E5"
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
                Obrigado,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Por nos ensinar nesses três anos e fazer o que somos hoje.
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
                Obrigado,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Por ser nossa guia responsável pela existência desse projeto.
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
                Obrigado,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Por fazer sempre a gente evoluir a cada código criado.
            </Typography>
        </Balancer>
  );
}

export {EquipeEasyPass, Objetivo, AgradecimentosAnderson, AgradecimentosLuciane, AgradecimentosHenrique, PorqueEasyPass}
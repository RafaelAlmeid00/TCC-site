import { Alert, AlertTitle } from "@mui/material";

function EmailPasswordNull() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: {xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw'},
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                O email e a senha é <strong>obrigatório.</strong>
            </Alert>
        </>
    );
}

function EmailIncorrect() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um email <strong>válido.</strong>
            </Alert>
        </>
    );
}


function CEPError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um CEP <strong>válido. </strong>
            </Alert>
        </>
    );
}

function CPFError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um CPF <strong>válido.</strong>
            </Alert>
        </>
    );
}

function NomeError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um nome <strong>válido. </strong>
            </Alert>
        </>
    );
}

function DataError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira uma data <strong>válida. </strong>
            </Alert>
        </>
    );
}


function NumError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um número <strong>válido. </strong>
            </Alert>
        </>
    );
}

function Sucess() {
    return (
        <>
            <Alert severity="success" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Sucesso!</AlertTitle>
                Seu cadastro foi <strong>concluido. </strong>
            </Alert>
        </>
    );
}

function ContentNull() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '35vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Não deixe campos <strong>em branco. </strong>
            </Alert>
        </>
    );
}

function RGError() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Insira um RG <strong>válido. </strong>
            </Alert>
        </>
    );
}

function ErrorLogin() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: {xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw'},
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                CPF ou senha <strong>inválidos.</strong>
            </Alert>
        </>
    );
}

function PedidosAberto() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Você já possui pedidos de cartão em <strong>aberto.</strong>
            </Alert>
        </>
    );
}


function EmailExiste() {
    return (
        <>
            <Alert severity="error" sx={{
                width: {xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw'},
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '30vw',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Esse email já possui um <strong>cadastro.</strong>
            </Alert>
        </>
    );
}



function CPFExiste() {
    return (
        <>
            <Alert severity="error" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '20vh', sm: '15vh', md: '15vh', lg: '10vh', xl: '10vh' },
                position: 'absolute',
                top: 10,
                left: '10%',
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Esse CPF já possui um <strong>cadastro.</strong>
            </Alert>
        </>
    );
}


export { CPFExiste, RGError, EmailExiste, PedidosAberto, ErrorLogin, ContentNull, EmailPasswordNull, EmailIncorrect, CEPError, CPFError, NomeError, DataError, NumError, Sucess };

import { Alert, AlertTitle } from "@mui/material";

function EmailPasswordNull() {
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


function CNPJError() {
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
                Insira um CNPJ <strong>válido.</strong>
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
                CPF ou senha <strong>inválidos.</strong>
            </Alert>
        </>
    );
}

function TipoNull() {
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
                Escolha o tipo de <strong>CNPJ. </strong>
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
                Esse email já possui um <strong>cadastro.</strong>
            </Alert>
        </>
    );
}


function ErrorCel() {
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
                Escreva um número <strong>válido.</strong>
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

function PerfilAtualizado() {
    return (
        <>
            <Alert severity="success" sx={{
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
                Os dados da sua conta foram <strong>atualizados.</strong>
            </Alert>
        </>
    );
}

function TokenAtualizado() {
    return (
        <>
            <Alert severity="success" sx={{
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
                Sua página foi <strong>atualizada.</strong>
            </Alert>
        </>
    );
}

function PerfilError() {
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
                Os dados da sua conta não foram <strong>atualizados.</strong>
            </Alert>
        </>
    );
}

function TokenPerfilError() {
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
                Os dados da página não foram <strong>atualizados.</strong>
            </Alert>
        </>
    );
}

function TokenPerfilErrorSer() {
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
                Erro do servidor ao <strong>atualizar.</strong>
            </Alert>
        </>
    );
}

function CEPPErfil() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                CEP <strong>incorreto.</strong>
                <br />
                Ou há campos <strong>vazios.</strong>
            </Alert>
        </>
    );
}

function SenhaDiferente() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                As senhas estão <strong>diferentes.</strong>
            </Alert>
        </>
    );
}

function SenhaInvalida() {
    return (
        <>
            <Alert severity="warning" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                A senha não segue os <strong>padrões certos.</strong>
            </Alert>
        </>
    );
}

interface Prop {
    data: string
}

function EmailEnviado({ data }: Prop) {
    return (
        <>
            <Alert severity="success" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                <AlertTitle>Sucesso!</AlertTitle>
                Um email foi enviado para: <strong>{data}.</strong>
            </Alert>
        </>
    );
}

function EmailNaoEnviado({ data }: Prop) {
    return (
        <>
            <Alert severity="error" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                <AlertTitle>Erro!</AlertTitle>
                O email não foi enviado para: <strong>{data}.</strong>
            </Alert>
        </>
    );
}

function ErrorCodigo() {
    return (
        <>
            <Alert severity="error" sx={{
                width: { xs: '40vw', sm: '35vw', md: '35vw', lg: '20vw', xl: '20vw' },
                height: { xs: '22vh', sm: '18vh', md: '18vh', lg: '12vh', xl: '12vh' },
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
                <AlertTitle>Erro!</AlertTitle>
                O código inserido não era <strong>válido!</strong>
            </Alert>
        </>
    );
}

export { ErrorCel, ErrorCodigo, EmailNaoEnviado, EmailEnviado, SenhaInvalida, SenhaDiferente, TipoNull, CNPJError, CEPPErfil, PerfilAtualizado, TokenPerfilErrorSer, TokenPerfilError, PerfilError, TokenAtualizado, CPFExiste, RGError, EmailExiste, PedidosAberto, ErrorLogin, ContentNull, EmailPasswordNull, EmailIncorrect, CEPError, CPFError, NomeError, DataError, NumError, Sucess };
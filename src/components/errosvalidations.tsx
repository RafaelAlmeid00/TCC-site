import { Alert, AlertTitle } from "@mui/material";

function EmailPasswordNull() {
    return (
    <>
    <Alert severity="warning" sx={{
        position: 'absolute', top: 0, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        position: 'absolute', top: 0, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        width: '200px',
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
        width: '200px',
        position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
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
                width: '200px',
                position: 'absolute', top: -63, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                Não deixe campos <strong>em branco. </strong>
            </Alert>
        </>
    );
}

function ErrorLogin() {
    return (
        <>
            <Alert severity="warning" sx={{
                position: 'absolute', top: 0, left: '35%', zIndex: 999, boxShadow: '0px 0px 8px 2px'
            }}>
                <AlertTitle>Atenção!</AlertTitle>
                CPF ou senha <strong>inválidos.</strong>
            </Alert>
        </>
    );
}

export {ErrorLogin, ContentNull, EmailPasswordNull, EmailIncorrect, CEPError, CPFError, NomeError, DataError, NumError, Sucess};

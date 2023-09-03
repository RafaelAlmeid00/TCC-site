/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalContext from "./context/modalcontext";
import React, { lazy, Suspense, useState } from "react";
import Loading from "./components/loading";
import OptionsCad from "./components/cadastro/optioncad";
import { AuthProvider, AuthProviderHome } from './context/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css"
import jwt_decode from "jwt-decode";
import AlertConta from "./components/sistema/AlertConta";

export function Deccode(): object {
  const userToken = localStorage.getItem('token');

  if (userToken) {
    return jwt_decode(userToken);
  } else {
    // Retorne algum valor de erro ou padrão, ou lance uma exceção
    console.error("Token não encontrado.");
    return null;
  }
}

export function UserDataLoader({ children }: any) {
  const [userData, setUserData] = useState(null);

  React.useEffect(() => {
    async function loadUserData() {
      try {
        const decodedData = await Deccode();
        setUserData(decodedData);
      } catch (error) {
        // Trate qualquer erro ao decodificar o token aqui
        console.error("Erro ao decodificar o token:", error);
        setUserData(null);
      }
    }

    loadUserData();
  }, []);

  return children(userData);
}


const App = lazy(() => import('./App'));
const AppLazy = lazy(() => import('./pages/home/App'));
const CadlogLazy = lazy(() => import('./pages/home/cadlog'));
const CadallLazy = lazy(() => import('./pages/home/cadall'));
const EasyPassLazy = lazy(() => import('./pages/home/EasyPass'));
const ContatosLazy = lazy(() => import('./pages/home/Contato'));
const ForgetPasswordLazy = lazy(() => import('./pages/home/ForgetPassword'));
const RecAccountLazy = lazy(() => import('./pages/home/ForgetRec'));
const Escola = lazy(() => import('./pages/home/cadEscola'));
const ServiLazy = lazy(() => import('./pages/home/Servicos'));
const HomeSistema = lazy(() => import('./pages/sistema/App'));
const RoutesLazy = lazy(() => import('./pages/sistema/BussRotas'));
const PerfilLazy = lazy(() => import('./pages/sistema/Perfil'));
const SACLazy = lazy(() => import('./pages/sistema/SAC'));
const OnibusLazy = lazy(() => import('./pages/sistema/onibus'));
const CardLazy = lazy(() => import('./pages/sistema/Card'));
const TrocaEmailLazy = lazy(() => import('./pages/sistema/AlterarEmail'));
const Docmentos = lazy(() => import('./pages/sistema/Documentos'));
const Informacoes = lazy(() => import('./pages/sistema/Informacoes'));
const Endereco = lazy(() => import('./pages/sistema/endereco'));
const Viagens = lazy(() => import('./pages/sistema/Viagens'));
const Extrato = lazy(() => import('./pages/sistema/Extrato'));

const Rota = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cep, setCep] = useState('');
  const [UF, setUF] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [num, setNum] = useState('');
  const [comp, setComp] = useState('');
  const [city, setCity] = useState('');
  const [loginbool, setLog] = useState(false);
  const [cpf, setCpf] = React.useState('');
  const [userData] = React.useState<object>(Deccode());
  const [Active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
    if (userData.user_status == 'ativo') {
      setActive(false)
    } else {
      setActive(true)
    }
  } else {
    console.log('sem token')
  }
  }, [])
  
  function checkDevice() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true; // está utilizando celular
    }
    else {
      return false; // não é celular
    }
  }
  console.log(checkDevice());
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    const themes = localStorage.getItem('theme');
    setDarkMode(themes === 'dark');
  }, []);

  const themes = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const [hasEntered, setHasEntered] = React.useState(false);
  const dark = localStorage.getItem('theme')
  const [verify, setVerify] = React.useState(false);

  React.useEffect(() => {
    if (dark == 'dark') {
      setVerify(true)
    } else {
      setVerify(false)
    }
  }, [dark])

  React.useEffect(() => {
    setHasEntered(true);
  }, []);

  return (
    <ThemeProvider theme={themes}>

      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>

            {/* Rotas públicas */}
            <Route path="/*" element={
              <React.Fragment>
                <AuthProviderHome>
                  <ModalContext.Provider value={{
                    verify,
                    darkMode,
                    setDarkMode,
                    themes, // ou o tema que você desejar usar
                    hasEntered,
                    setHasEntered,
                  }}>
                    <Routes>
                      <Route path="/" element={<App />} />
                      <Route path="/Servicos" element={<ServiLazy />} />
                      <Route path="/App" element={<AppLazy />} />
                      <Route path="/EasyPass" element={<EasyPassLazy />} />
                      <Route path="/Contatos" element={<ContatosLazy />} />
                      <Route path="/Opcoes" element={<OptionsCad />} />
                    </Routes>
                  </ModalContext.Provider>
                </AuthProviderHome>
              </React.Fragment>
            } />

            {/* Rotas de autenticação */}
            <Route path="/cadastro/*" element={
              <React.Fragment>
                <ModalContext.Provider value={{
                  verify,
                  email,
                  setEmail,
                  password,
                  setPassword,
                  cep,
                  setCep,
                  UF,
                  setUF,
                  district,
                  setDistrict,
                  street,
                  setStreet,
                  num,
                  setNum,
                  comp,
                  setComp,
                  city,
                  setCity,
                  loginbool,
                  setLog,
                  darkMode,
                  setDarkMode,
                  themes, // ou o tema que você desejar usar
                  hasEntered,
                  setHasEntered,
                  cpf, setCpf
                }}>
                  <Routes>
                    <Route path="/" element={<CadlogLazy />} />
                    <Route path="/EsqueciaSenha" element={<ForgetPasswordLazy />} />
                    <Route path="/Rec" element={<RecAccountLazy />} />
                    <Route path="/Complemento" element={<CadallLazy />} />
                    <Route path="/Empresa" element={<Escola />} />
                  </Routes>
                </ModalContext.Provider>
              </React.Fragment>
            } />

            {/* Rota do sistema */}
            <Route path="/Sistema/*" element={
              <AuthProvider>
                <ModalContext.Provider value={{
                  verify,
                  darkMode,
                  setDarkMode,
                  themes, // ou o tema que você desejar usar
                  hasEntered,
                  setHasEntered,
                  userData
                }}>
                  <React.Fragment>
                    <Routes>
                      <Route path="/" element={<HomeSistema />} />
                      <Route path="/Rotas" element={(Active ? <AlertConta /> : <RoutesLazy />)} />
                      <Route path="/Perfil" element={<PerfilLazy />} />
                      <Route path="/SAC" element={(Active ? <AlertConta /> : <SACLazy />)} />
                      <Route path="/Onibus" element={(Active ? <AlertConta /> : <OnibusLazy />)} />
                      <Route path="/Card" element={(Active ? <AlertConta /> : <CardLazy />)} />
                      <Route path="/AlterarEmail" element={(Active ? <AlertConta /> : <TrocaEmailLazy />)} />
                      <Route path="/Documentos" element={<Docmentos />} />
                      <Route path="/Endereco" element={<Endereco />} />
                      <Route path="/Dados" element={<Informacoes />} />
                      <Route path="/Viagens" element={(Active ? <AlertConta /> : <Viagens />)} />
                      <Route path="/Extrato" element={(Active ? <AlertConta /> : <Extrato />)} />
                    </Routes>
                  </React.Fragment>
                </ModalContext.Provider>
              </AuthProvider>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );

};


export { Rota };
/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModalContext from "./context/modalcontext";
import React, { lazy, Suspense, useState } from "react";
import Loading from "./components/loading";
import OptionsCad from "./components/cadastro/optioncad";
import { AuthProvider, AuthProviderHome } from './context/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css"
import AlertConta from "./components/sistema/AlertConta";
import { socket } from "../socket.io/index";
import jwt_decode from "jwt-decode";

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
  const userToken = localStorage.getItem('token')
  React.useEffect(() => {
    if (userToken) {
      socket.connect()
    } else {
      console.log('sem token sem connect');
      
    }
  }, [userToken])

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
  const [userData, setUserData] = React.useState<object | null>(null);
  const [Active, setActive] = React.useState(false);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [alertatopo, setAlertaTopo] = React.useState({})

  React.useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (userToken) {
      const decoded: object = jwt_decode(userToken)
      console.log(userData);
      console.log(decoded);
      setUserDataLoaded(true)

      setTimeout(() => {
        console.log(socket);
        
        socket.emit('userDetails', decoded.user_CPF, (err) => {
          console.log('emitindo os bagui');
          
          if (err) {
            console.log('timeout');
          }
        });
      }, 4000);

      setTimeout(() => {
        
        console.log(socket);
      socket.on('userDetails', (data) => {
        console.log(data)
        setUserData(data)
      })
      }, 4000);
      return () => {
        socket.off('userDetails');
      };
    } else {
      console.log('sem token.');
    }
  }, [userData]);


  React.useEffect(() => {
    console.log('okok');
    const handleAlerta = () => {
      setAlertaTopo({})
      if (userData && userData.user_verifyemail == null || userData && userData.user_verifyemail == 0) {
        if (userData && userData.user_verifcel == null || userData && userData.user_verifycel == 0) {
          const alerta = {
            nomeBtn: 'Confirmar',
            rotaBtn: '/Sistema/dados',
            statusAlert: 'warning',
            textAlert: 'Clique no botão abaixo para ir confirmar seus dados:',
            titleAlert: 'Seu email e celular precisa de confirmação',
          }
          setAlertaTopo(alerta)
          setActive(true)
          console.log('okok');
        } else {
          const alerta = {
            nomeBtn: 'Confirmar',
            rotaBtn: '/Sistema/dados',
            statusAlert: 'warning',
            textAlert: 'Clique no botão abaixo para ir confirmar seus dados:',
            titleAlert: 'Seu email precisa de confirmação',
          }
          setAlertaTopo(alerta)
          setActive(true)
          console.log('okok');

        }
      } else {
        if (userData && userData.user_verifycel == null || userData && userData.user_verifycel == 0) {
          const alerta = {
            nomeBtn: 'Confirmar',
            rotaBtn: '/Sistema/dados',
            statusAlert: 'warning',
            textAlert: 'Clique no botão abaixo para ir confirmar seus dados:',
            titleAlert: 'Seu celular precisa de confirmação',
          }
          setAlertaTopo(alerta)
          setActive(true)
          console.log('okok');

        } else {
          if (userData && userData.user_status == 'inativo') {
            const alerta = {
              nomeBtn: 'Confirmar',
              rotaBtn: '/Sistema/Documentos',
              statusAlert: 'warning',
              textAlert: 'Clique no botão abaixo para enviar seus documentos:',
              titleAlert: 'Ative sua conta!',
            }
            setAlertaTopo(alerta)
            setActive(true)
            console.log('okok');

          } else {
            console.log('okok');

          }

        }
      }
    }
    handleAlerta()
    console.log('okok');

  }, [userData])
console.log('this is active: ', Active);

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
                cpf, setCpf,
                userData, 
                setUserData
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
                userData, 
                setUserData,
                alertatopo,
                setAlertaTopo
              }}>
                <React.Fragment>
                  <Routes>
                    {userDataLoaded ? (
                      <Route path="/" element={<HomeSistema />} />
                    ) : (
                      <Route path="/" element={<Loading />} />
                    )}
                    <Route path="/Rotas" element={(Active ? <AlertConta /> : <RoutesLazy />)} />
                    <Route path="/Perfil" element={<PerfilLazy />} />
                    <Route path="/SAC" element={(Active ? <SACLazy /> : <AlertConta />)} />
                    <Route path="/Onibus" element={(Active ? <AlertConta /> : <OnibusLazy />)} />
                    <Route path="/Card" element={(Active ? <AlertConta /> : <CardLazy />)} />
                    <Route path="/AlterarEmail" element={(Active ? <AlertConta /> : <TrocaEmailLazy />)} />
                    <Route path="/Documentos" element={<Docmentos />} />
                    <Route path="/Endereco" element={<Endereco />} />
                    <Route path="/Dados" element={<Informacoes />} />
                    <Route path="/Viagens" element={(Active ? <AlertConta /> : <Viagens />)} />
                    <Route path="/Extrato" element={<Extrato />} />
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
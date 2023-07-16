import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalContext from "./context/modalcontext";
import React, { lazy, Suspense, useState } from "react";
import Loading from "./components/loading";
import OptionsCad from "./components/cadastro/optioncad";
import { AuthProvider, AuthProviderHome } from './context/auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css"

const CadlogLazy = lazy(() => import('./pages/home/cadlog'));
const CadallLazy = lazy(() => import('./pages/home/cadall'));
const App = lazy(() => import('./App'));
const EasyPassLazy = lazy(() => import('./pages/home/EasyPass'));
const ContatosLazy = lazy(() => import('./pages/home/Contato'));
const HomeSistema = lazy(() => import('./pages/sistema/App'));
const ServiLazy = lazy(() => import('./pages/home/Servicos'));
const RoutesLazy = lazy(() => import('./pages/sistema/BussRotas'))
const AppLazy = lazy(() => import('./pages/home/App'));
const PerfilLazy = lazy(() => import('./pages/sistema/Perfil'));
const SACLazy = lazy(() => import('./pages/sistema/SAC'));
const Escola = lazy(() => import('./pages/home/cadEscola'));

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
                  }}>
                  <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Servicos" element={<ServiLazy />} />
                    <Route path="/App" element={<AppLazy />} />
                    <Route path="/EasyPass" element={<EasyPassLazy />} />
                    <Route path="/Contatos" element={<ContatosLazy />} />
                    <Route path="/opcoes" element={<OptionsCad />} />
                    <Route path="/areaescolas" element={<Escola />} />
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
                }}>
                <Routes>
                  <Route path="/" element={<CadlogLazy />} />
                  <Route path="/complemento" element={<CadallLazy />} />
                </Routes>
              </ModalContext.Provider>
            </React.Fragment>
              } />

              {/* Rota do sistema */}
              <Route path="/Sistema/*" element={
            <AuthProvider>
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
                }}>
              <React.Fragment>
                  <Routes>
                    <Route path="/" element={<HomeSistema />} />
                    <Route path="/rotas" element={<RoutesLazy />} />
                    <Route path="/Perfil" element={<PerfilLazy />} />
                    <Route path="/SAC" element={<SACLazy />} /> 
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

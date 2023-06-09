import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModalContext from "./context/modalcontext";
import React, { lazy, Suspense, useState } from "react";
import Loading from "./components/loading";
import OptionsCad from "./components/cadastro/optioncad";

const CadlogLazy = lazy(() => import('./pages/home/cadlog'));
const CadallLazy = lazy(() => import('./pages/home/cadall'));
const App = lazy(() => import('./App'));
const EasyPassLazy = lazy(() => import('./pages/home/EasyPass'));
const ContatosLazy = lazy(() => import('./pages/home/Contato'));
const HomeSistema = lazy(() => import('./pages/sistema/App'));
const ServiLazy = lazy(() => import('./pages/home/Servicos'));
const AppLazy = lazy(() => import('./pages/home/App'));
const PerfilLazy = lazy(() => import('./pages/sistema/Perfil'));

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
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  const userJson = localStorage.getItem('user');
  const userData = userJson ? JSON.parse(userJson) : null;

  return (
    <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Rotas públicas */}
          
              <Route path="/*" element={
            isAuthenticated ? <Navigate to = "/Sistema" /> :
                <React.Fragment>
                  <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/Servicos" element={<ServiLazy />} />
                    <Route path="/App" element={<AppLazy />} />
                    <Route path="/EasyPass" element={<EasyPassLazy />} />
                    <Route path="/Contatos" element={<ContatosLazy />} />
                    <Route path="/opcoes" element={<OptionsCad />} />
                  </Routes>
                </React.Fragment>
              } />

              {/* Rotas de autenticação */}
              <Route path="/cadastro/*" element={
            isAuthenticated ? <Navigate to="/Sistema" /> :
                <React.Fragment>
                  <ModalContext.Provider value={{ loginbool, setLog, email, password, cep, UF, street, district, num, comp, city, setEmail, setPassword, setCep, setUF, setStreet, setDistrict, setNum, setComp, setCity }}>
                    <Routes>
                      <Route path="/" element={<CadlogLazy />} />
                      <Route path="/complemento" element={<CadallLazy />} />
                    </Routes>
                  </ModalContext.Provider>
                </React.Fragment>
              } />

              {/* Rota do sistema */}
              <Route path="/Sistema/*" element={
              isAuthenticated ?
                <React.Fragment>
                <ModalContext.Provider value={{ userData }}>
                  <Routes>
                    <Route path="/" element={<HomeSistema />} />
                  <Route path="/Perfil" element={<PerfilLazy />} />
                  </Routes>
                </ModalContext.Provider>
                </React.Fragment>
                : <Navigate to="/" />
              } />
            </Routes>
          </Suspense>
    </BrowserRouter>
  );
};

export default Rota;
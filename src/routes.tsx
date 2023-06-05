import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalContext from "./context/modalcontext";
import React, { lazy, Suspense } from "react";
import Loading from "./components/loading";
import { Provider } from 'react-wrap-balancer'
import OptionsCad from "./components/cadastro/optioncad";

const CadlogLazy = lazy(() => import('./pages/home/cadlog'));
const CadallLazy = lazy(() => import('./pages/home/cadall'));
const App = lazy(() => import('./App'));
const EasyPassLazy = lazy(() => import('./pages/home/EasyPass'));
const ContatosLazy = lazy(() => import('./pages/home/Contato'));
const HomeSistema = lazy(() => import('./pages/sistema/App'));
const ServiLazy = lazy(() => import('./pages/home/Servicos'));
const AppLazy = lazy(() => import('./pages/home/App'));

const Rota = () => {
  const [tokenChecked, setTokenChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setHasToken(true);
    }
    setTokenChecked(true);
  }, []);

  if (!tokenChecked) {
    return <Loading />; // Mostra um componente de carregamento enquanto verifica o token
  }

  return (
    <BrowserRouter>
      <Provider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/Sistema" element={hasToken ? <HomeSistema /> : <Navigate to="/Cadastro" />} />
            <Route path="/" element={<App />} />
            <Route path="/Servicos" element={<ServiLazy/>}/>
            <Route path="/App" element={<AppLazy/>}/>
            <Route path="/EasyPass" element={<EasyPassLazy />} />
            <Route path="/Contatos" element={<ContatosLazy />} />
            <Route path="/opcoes" element={<OptionsCad />} />
            <Route path="/cadastro/*" element={
              <React.Fragment>
                <ModalContext.Provider value={{ loginbool, setLog, email, password, cep, UF, street, district, num, comp, city, setEmail, setPassword, setCep, setUF, setStreet, setDistrict, setNum, setComp, setCity }}>
                  <Routes>
                    <Route path="" element={<CadlogLazy />} />
                    <Route path="/complemento" element={<CadallLazy />} />
                  </Routes>
                </ModalContext.Provider>
              </React.Fragment>
            } />
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
};

export default Rota;

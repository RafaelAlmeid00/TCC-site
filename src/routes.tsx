import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalContext from './context/modalcontext';
import React, { useState, lazy, Suspense } from "react";
import Loading from "./components/loading";
import { Provider } from 'react-wrap-balancer'
import OptionsCad from "./components/cadastro/optioncad";

const CadlogLazy = lazy(() => import('./pages/cadlog'));
const CadallLazy = lazy(() => import('./pages/cadall'));
const App = lazy(() => import('./App'));
const EasyPassLazy = lazy(() => import('./pages/EasyPass'));
const ContatosLazy = lazy(() => import('./pages/Contato'));


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
 // preencha com dados padrão

  return (
    <BrowserRouter>
    <Provider>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/EasyPass" element={<EasyPassLazy />}/>
          <Route path="/Contatos" element={<ContatosLazy />} />
          <Route path="/opcoes" element={<OptionsCad />} />
          <Route path="/cadastro/*" element={<React.Fragment>
            <ModalContext.Provider value={{email, password, cep, UF, street, district, num, comp, city, setEmail, setPassword, setCep, setUF, setStreet, setDistrict, setNum, setComp, setCity}}>
              <Routes>
                <Route path="" element={<CadlogLazy />} />
                <Route path="/complemento" element={<CadallLazy />} />
              </Routes>
            </ModalContext.Provider>
          </React.Fragment>} />
        </Routes>
      </Suspense>
      </Provider>
    </BrowserRouter>
  );
};

export default Rota;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalContext from './context/modalcontext';
import React, { useState, lazy, Suspense } from "react";
import Loading from "./components/loading";


const CadlogLazy = lazy(() => import('./pages/cadlog'));
const CadallLazy = lazy(() => import('./pages/cadall'));
const App = lazy(() => import('./App'));


const Rota = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('')
  const [cep, setCep] = useState('');
  const [UF, setUF] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [num, setNum] = useState('');
  const [comp, setComp] = useState('');
  const [cidade, setCidade] = useState('');
 // preencha com dados padrão

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cadastro/*" element={<React.Fragment>
            <ModalContext.Provider value={{email, password, cpf, nome, data, cep, UF, rua, bairro, num, comp, cidade, setEmail, setPassword, setCpf, setNome, setData, setCep, setUF, setRua, setBairro, setNum, setComp, setCidade}}>
              <Routes>
                <Route path="" element={<CadlogLazy />} />
                <Route path="/complemento" element={<CadallLazy />} />
              </Routes>
            </ModalContext.Provider>
          </React.Fragment>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Rota;

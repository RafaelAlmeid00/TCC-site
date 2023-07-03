/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import { useContext, useState } from "react";
import axios from "axios";
import ModalContext from "../../../context/modalcontext";
import {
  CPFError,
  DataError,
  NomeError,
  NumError,
  CEPError,
  Sucess,
} from "../../errosvalidations";
import { useNavigate } from "react-router-dom";

function CompleteCadEscola() {
  const [contato, setContato] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  const { cep } = useContext(ModalContext);
  const { UF } = useContext(ModalContext);
  const { district } = useContext(ModalContext);
  const { street } = useContext(ModalContext);
  const { num } = useContext(ModalContext);
  const { comp } = useContext(ModalContext);
  const { city } = useContext(ModalContext);
  const [showErrorCPF, setShowErrorCPF] = useState(false);
  const [showErrorNome, setShowErrorNome] = useState(false);
  const [showErrorData, setShowErrorData] = useState(false);
  const [showErrorCEP, setShowErrorCEP] = useState(false);
  const [showErrorNum, setShowErrorNum] = useState(false);
  const [showSucess, setShowSucess] = useState(false);
  const [tipo, setTipo] = useState("");

  const navigate = useNavigate();

  async function cadastrarEscola(
    cnpj: string,
    name: string,
    contato: string,
    cep: string,
    UF: string,
    district: string,
    street: string,
    num: string,
    comp: string,
    city: string
  ) {
    //Verificação
    console.log("aq ta indo");

    if (cnpj == "") {
      setShowErrorCPF(true);
      setShowErrorData(false);
      setShowErrorNome(false);
      setShowErrorCEP(false);
    } else if (cnpj.length < 14) {
      setShowErrorCPF(true);
      setShowErrorData(false);
      setShowErrorNome(false);
      setShowErrorCEP(false);
    } else if (name == "") {
      setShowErrorNome(true);
      setShowErrorCPF(false);
      setShowErrorData(false);
      setShowErrorCEP(false);
    } else if (cep == "") {
      setShowErrorCEP(true);
      setShowErrorData(false);
      setShowErrorCPF(false);
      setShowErrorNome(false);
    } else if (city == "") {
      setShowErrorCEP(true);
      setShowErrorData(false);
      setShowErrorCPF(false);
      setShowErrorNome(false);
    } else if (num == "") {
      setShowErrorNum(true);
      setShowErrorCEP(false);
      setShowErrorData(false);
      setShowErrorCPF(false);
      setShowErrorNome(false);
    } else {
      setShowErrorNum(false);
      setShowErrorCEP(false);
      setShowErrorData(false);
      setShowErrorCPF(false);
      setShowErrorNome(false);
    }
    console.log("aq ta indo tbm²");

    const dadosEscola = {
      buss_CNPJ: cnpj,
      buss_nome: name,
      buss_contato: contato,
      buss_endCEP: cep,
      buss_endUF: UF,
      buss_endbairro: district,
      buss_endrua: street,
      buss_endnum: num,
      buss_endcomplemento: comp,
      buss_endcidade: city,
      buss_tipo: tipo,
    };
    console.log(dadosEscola);

    try {
      const response = await axios.post(
        "http://localhost:3344/bussines",
        dadosEscola
      );
      setShowSucess(true);
      console.log("foi mlk");
      navigate("/cadAlunos");
    } catch (error) {
      if (error.response) {
        // O servidor retornou um status diferente de 2xx
        console.error("Erro na requisição POST:", error.response.status);
      } else if (error.request) {
        // A requisição foi feita, mas não recebeu uma resposta
        console.error("Erro na requisição POST:", error.request);
      } else {
        // Algo aconteceu durante a configuração da requisição
        console.error("Erro na requisição POST:", error.message);
      }
    }
  }

  const handleclick = async () => {
    await cadastrarEscola(
      cnpj,
      name,
      contato,
      cep,
      UF,
      district,
      street,
      num,
      comp,
      city
    );
    console.log("testando");
  };

  return (
    <>
      {showErrorCPF && <CPFError />}
      {showErrorNome && <NomeError />}
      {showErrorData && <DataError />}
      {showErrorCEP && <CEPError />}
      {showErrorNum && <NumError />}
      {showSucess && <Sucess />}

      <Container
        sx={{
          marginLeft: "-22px",
          width: "110%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            mb: "30px",
            color: "#222222",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Dados Pessoais e Endereço
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: "40px",
            color: "#444444",
            fontSize: "15px",
          }}
        >
          Coloque o seu CNPJ e CEP para obter os dados:
        </Typography>
        <FormControl variant="standard" sx={{ width: "80%", mb: "20px" }}>
          <InputLabel htmlFor="input-with-icon-adornment">CNPJ</InputLabel>
          <Input
            id="input-with-icon-adornment"
            inputProps={{ maxLength: 14 }}
            required
            value={cnpj}
            placeholder="Insira apenas os números do CNPJ"
            onChange={(event) => {
              const { value } = event.target;
              const newValue = value.replace(/\D/g, ""); // remove tudo que não é número
              setCnpj(newValue);
            }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            }
            sx={{ fontSize: "14px" }}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ width: "80%", mb: "20px" }}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Nome Completo Diretor
          </InputLabel>
          <Input
            inputProps={{ maxLength: 45 }}
            placeholder="Fulano da Silva Oliveira"
            required
            id="input-with-icon-adornment"
            value={name}
            onChange={(event) => setName(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            }
            sx={{ fontSize: "14px" }}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ width: "80%", mb: "20px" }}>
          <InputLabel htmlFor="input-with-icon-adornment">Contato</InputLabel>
          <Input
            inputProps={{ maxLength: 11 }}
            placeholder="24993269984"
            required
            id="input-with-icon-adornment"
            value={contato}
            onChange={(event) => setContato(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            }
            sx={{ fontSize: "14px" }}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleclick}
          sx={{
            mt: "40px",
          }}
        >
          Finalizar
        </Button>
      </Container>
    </>
  );
}

export default CompleteCadEscola;

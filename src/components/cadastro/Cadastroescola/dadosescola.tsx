import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import React from "react";
import axios from "axios";
import ModalContext from "../../../context/modalcontext";
import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import {
  CNPJError,
  DataError,
  NomeError,
  NumError,
  CEPError,
  Sucess,
  EmailIncorrect,
  EmailExiste,
  TipoNull,
} from "../../errosvalidations";
import { Btn } from "../../btns";
import colors from "../../../assets/colors";
import CompleteCad2 from "../endereço";

function CompleteCadEscola() {
  const [cnpj, setCnpj] = React.useState("");
  const [name, setName] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const { cep } = React.useContext(ModalContext);
  const { UF } = React.useContext(ModalContext);
  const { district } = React.useContext(ModalContext);
  const { street } = React.useContext(ModalContext);
  const { num } = React.useContext(ModalContext);
  const { comp } = React.useContext(ModalContext);
  const { city } = React.useContext(ModalContext);
  const { verify } = React.useContext(ModalContext);
  const { email, setEmail } = React.useContext(ModalContext);
  const [showErrorCPNJ, setShowErrorCPNJ] = React.useState(false);
  const [showErrorNome, setShowErrorNome] = React.useState(false);
  const [showErrorData, setShowErrorData] = React.useState(false);
  const [showErrorCEP, setShowErrorCEP] = React.useState(false);
  const [showErrorNum, setShowErrorNum] = React.useState(false);
  const [showSucess, setShowSucess] = React.useState(false);
  const [showErrorEmail, setShowErrorEmail] = React.useState(false);
  const [showErrorTipo, setShowErrorTipo] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    console.log(cep);

  }, [cep])

  async function ValidaCNPJ(cnpj: string): Promise<boolean> {
    if (cnpj === '') {
      return false;
    }

    if (cnpj.length !== 14) {
      return false;
    }

    if (
      cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222" ||
      cnpj === "33333333333333" ||
      cnpj === "44444444444444" ||
      cnpj === "55555555555555" ||
      cnpj === "66666666666666" ||
      cnpj === "77777777777777" ||
      cnpj === "88888888888888" ||
      cnpj === "99999999999999"
    ) {
      return false;
    }

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) {
      return false;
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) {
      return false;
    }

    return true;
  }


  async function VerifyEmail(email: string): Promise<boolean> {
    try {
      console.log("ta indo");
      const response = await axios.post('https://easypass-iak1.onrender.com/bussines/email', { buss_contato: email });
      console.log(email);
      console.log(response.data);

      if (response.data.error) {
        console.log('Email já existe!');
        setError(true);
        setEmail?.('');
        setShowErrorEmail(false);
        setTimeout(() => {
          setError(false);
        }, 5000);
        console.log('erro da req');
        return false; // Email já existe, não pode prosseguir com o cadastro
      } else {
        console.log('era paa ir');
        return true; // Email disponível para cadastro
      }
    } catch (error) {
      console.log(error);
      setError(false);

      if (email == '' || email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        console.log('erro do pattern');

        setShowErrorEmail(true);
        return false;
      } else {
        setShowErrorEmail(false);
        console.log('foi');
        return true;
      }
    }
  }

  async function VerifyInputs(): Promise<boolean> {
    //Verificação
    const emailvalidation = await VerifyEmail(String(email));
    console.log(emailvalidation);

    if (!emailvalidation) {
      setShowErrorEmail(true)
      console.log("Email já cadastrado ou inválido");
      setTimeout(() => {
        setShowErrorEmail(false)
      }, 5000);
      return false // Retornar aqui para evitar que o cadastro prossiga
    }

    const cnpjvalidation = await ValidaCNPJ(cnpj)
    console.log(cnpjvalidation);

    if (!cnpjvalidation) {
      setShowErrorCPNJ(true)
      setTimeout(() => {
        setShowErrorCPNJ(false)
      }, 5000);
      return false
    }
    if (cnpj == "") {
      setShowErrorCPNJ(true);
      setShowErrorData(false);
      setShowErrorNome(false);
      setShowErrorCEP(false);
      setShowErrorNum(false);
      setShowErrorTipo(false)
      return false
    } else if (cnpj.length < 14) {
      setShowErrorCPNJ(true);
      setShowErrorData(false);
      setShowErrorNome(false);
      setShowErrorCEP(false);
      setShowErrorNum(false);
      setShowErrorTipo(false)
      return false
    } else if (name == "") {
      setShowErrorNome(true);
      setShowErrorCPNJ(false);
      setShowErrorData(false);
      setShowErrorCEP(false);
      setShowErrorNum(false);
      setShowErrorTipo(false)
      return false
    } else if (tipo == "") {
      setShowErrorTipo(true)
      setShowErrorNome(false);
      setShowErrorCPNJ(false);
      setShowErrorData(false);
      setShowErrorCEP(false);
      setShowErrorNum(false);
      setShowErrorTipo(false)
      return false 
    } else if (cep == "" || city == "") {
      setShowErrorCEP(true);
      setShowErrorData(false);
      setShowErrorCPNJ(false);
      setShowErrorNome(false);
      setShowErrorNum(false);
      setShowErrorTipo(false)
      return false
    } else if (num == "") {
      setShowErrorNum(true);
      setShowErrorCEP(false);
      setShowErrorData(false);
      setShowErrorCPNJ(false);
      setShowErrorNome(false);
      setShowErrorTipo(false)
      return false
    } else {
      setShowErrorNum(false);
      setShowErrorCEP(false);
      setShowErrorData(false);
      setShowErrorCPNJ(false);
      setShowErrorNome(false);
      setShowErrorTipo(false)
      return true
    }
  }


  async function cadastrarEscola(
    cnpj: string,
    name: string,
    email?: string,
    cep?: string,
    UF?: string,
    district?: string,
    street?: string,
    num?: string,
    comp?: string,
    city?: string
  ) {

    const dadosEscola = {
      buss_CNPJ: cnpj,
      buss_nome: name,
      buss_contato: email,
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

    const validationinputs = await VerifyInputs()
    console.log(validationinputs);

    if (validationinputs) {
      try {
        await axios.post(
          "https://easypass-iak1.onrender.com/bussines",
          dadosEscola
        );
        setShowSucess(true);
        console.log("foi mlk");
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro na requisição POST:', error.message);
        } else if (axios.isAxiosError(error)) {
          // Verificar se o erro é do Axios (opcional)
          if (error.response) {
            console.error('Erro na requisição POST:', error.response.status);
          } else if (error.request) {
            console.error('Erro na requisição POST:', error.request);
          } else {
            console.error('Erro desconhecido na requisição POST');
          }
        } else {
          console.error('Erro desconhecido na requisição POST');
        }
      }
    } else {
      console.log('erros nos input mermo');

    }
  }

  const handleclick = async () => {
    await cadastrarEscola(
      cnpj,
      name,
      email,
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

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));

  return (
    <>
      {showErrorCPNJ && <CNPJError />}
      {showErrorNome && <NomeError />}
      {showErrorData && <DataError />}
      {showErrorCEP && <CEPError />}
      {showErrorNum && <NumError />}
      {showSucess && <Sucess />}
      {showErrorEmail && <EmailIncorrect />}
      {error && <EmailExiste />}
      {showErrorTipo && <TipoNull />}

      <Container sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
        <Container sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}>
          <Typography sx={{
            textAlign: 'center', mb: '30px', color: verify ? 'white' : '#222222', fontSize: {
              xs: '2.5vw',  // (7.5 / 1200) * 600
              sm: '2vw',  // (7.5 / 1200) * 900
              md: '2vw',  // (7.5 / 1200) * 1200
              lg: '1vw',
              xl: '1vw',  // Manter o mesmo tamanho de lg para xl
            }, fontWeight: 'bold'
          }}>
            Dados Pessoais e Endereço
          </Typography>
          <Typography sx={{
            textAlign: 'center', mb: '20px', color: verify ? 'white' : '#444444', fontSize: {
              xs: '2vw',  // (7.5 / 1200) * 600
              sm: '1.5vw',  // (7.5 / 1200) * 900
              md: '1vw',  // (7.5 / 1200) * 1200
              lg: '1vw',
              xl: '1vw',  // Manter o mesmo tamanho de lg para xl
            },
          }}>
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
              Nome da Empresa/Escola
            </InputLabel>
            <Input
              inputProps={{ maxLength: 45 }}
              placeholder="Companhia Siderúgica Nacional"
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
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              inputProps={{ maxLength: 45 }}
              placeholder="abcd@gmail.com"
              required
              id="input-with-icon-adornment"
              value={email}
              onChange={(event) => setEmail?.(event.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              }
              sx={{ fontSize: "14px" }}
            />
          </FormControl>
          <FormControl sx={{ width: "80%", mb: 5, mt: 2 }} variant="standard" required>
            <InputLabel id="demo-simple-select-label">Tipo de CNPJ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-customized-select"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              input={<BootstrapInput />}
            >
              <MenuItem value={"school"} >
                Escola
              </MenuItem>
              <MenuItem value={"bussines"} >
                Empresa
              </MenuItem>
            </Select>
          </FormControl>
        <Btn name={'Finalizar'} fun={handleclick} cl={verify ? colors.pm : 'white'} route={""} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} vis={undefined} mb={undefined} />
      </Container>
      <CompleteCad2 />
    </Container >
    </>
  );
}

export default CompleteCadEscola;

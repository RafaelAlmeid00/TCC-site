import { Avatar, Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import theme from "../../assets/theme";
import React from "react";
import ModalContext from "../../context/modalcontext";
import colors from "../../assets/colors";
import { Contacts, Email, CalendarMonth, Badge, AccountCircle, Apartment, LocationCity, Groups, Signpost, PlaylistAdd, Home, Domain } from "@mui/icons-material";
import axios from "axios";
import Balancer from "react-wrap-balancer";
import { BtnL } from "../btns";

export default function Vagas() {
    const { verify } = React.useContext(ModalContext);
    const { themes } = React.useContext(ModalContext);
    const [curriculo, setCurriculo] = React.useState<any | null>()
    const [cpf, setCpf] = React.useState("");
    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [cel, setCel] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [UF, setUF] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [num, setNum] = React.useState("");
    const [comp, setComp] = React.useState("");
    const [city, setCity] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState('');
    const [sal, setSal] = React.useState('0.00');
    const [filhos, setFilhos] = React.useState('0');
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const [programador, setProgramador] = React.useState(false);
    const [optJavascript, setOptJavascript] = React.useState<any>('Nenhum');
    const [optTypescript, setOptTypescript] = React.useState<any>('Nenhum');
    const [optNodejs, setOptNodejs] = React.useState<any>('Nenhum');
    const [optReact, setOptReact] = React.useState<any>('Nenhum');
    const [optNative, setOptNative] = React.useState<any>('Nenhum');
    const [ingles, setIngles] = React.useState<any>('Nenhum');
    const [espanhol, setEspanhol] = React.useState<any>('Nenhum');
    const [viagem, setViagem] = React.useState<any>('Nenhum');
    const [noturno, setNoturno] = React.useState<any>('Nenhum');
    const [selectCarteira, setSelectCarteira] = React.useState<any>([]);
    const [instagram, setInstagram] = React.useState<any>('');
    const [linkedin, setLinkedin] = React.useState<any>('');
    const [facebook, setFacebook] = React.useState<any>('');
    const [github, setGithub] = React.useState<any>('');
    const [perfil] = React.useState<any>('');
    const fileInputRefAvatar = React.useRef<any>(null)
    const [detalhesExperiencia, setExperiencias] = React.useState<any>('');
    const [detalhesEscolares, setEscolares] = React.useState<any>('');
    const [loading, setLoading] = React.useState(false)
    const [disable, setDisable] = React.useState(false)
    const dataformatada = handleSubmitData()
    const fundo = themes.palette.background.default
    const hasCarro = selectCarteira.includes("Carro");
    const hasMoto = selectCarteira.includes("Moto");
    const selectedOptionsJSON = JSON.stringify(selectedOptions);
    const interesses = [
        { 'Javascript': optJavascript },
        { 'Typescript': optTypescript },
        { 'React': optReact },
        { 'Node.Js': optNodejs },
        { 'ReactNative': optNative }
    ]
    const interessesJSON = JSON.stringify(interesses);

    const data: any = {
        cur_CPF: cpf,
        cur_email: email,
        cur_nome_completo: name,
        cur_data_nasc: dataformatada,
        cur_pret_salarial: sal,
        cur_num_filhos: parseInt(filhos),
        cur_escolaridade: selectedOption,
        cur_cep: cep,
        cur_cidade: city,
        cur_bairro: district,
        cur_rua_complemento: comp,
        cur_numero: num,
        cur_uf: UF,
        cur_detalhes_escolares: detalhesEscolares,
        cur_detalhes_experiencia_profissional: detalhesExperiencia,
        cur_area_interesse: selectedOptionsJSON,
        cur_ingles: ingles,
        cur_espanhol: espanhol,
        cur_disponibilidade_viagem: viagem,
        cur_trabalho_noturno: noturno,
        cur_carteira_carro: hasCarro ? "Sim" : "Não",
        cur_carteira_moto: hasMoto ? "Sim" : "Não",
        cur_linkedin: linkedin,
        cur_instagram: instagram,
        cur_github: github,
        cur_facebook: facebook,
        cur_foto_perfil: perfil,
        cur_con_prog: interessesJSON,
        cur_cel: cel
    };

    const handleActivePerfil = (event: any) => {
        handleImageChange(event)
    }

    const handleOptionChange = (event: { target: { value: any; checked: any; }; }) => {
        const value = event.target.value;
        setSelectedOptions((prevSelectedOptions: any[]) => {
            if (prevSelectedOptions.includes(value)) {
                return prevSelectedOptions.filter((option: any) => option !== value);
            } else {
                return [...prevSelectedOptions, value];
            }
        });

        if (value === 'Programador') {
            setProgramador(event.target.checked);
        }
    };

    const handleOptionChangeCarteira = (event: { target: { value: any; checked: any; }; }) => {
        const value = event.target.value;
        setSelectCarteira((prevSelectedOptions: any[]) => {
            if (prevSelectedOptions.includes(value)) {
                return prevSelectedOptions.filter((option: any) => option !== value);
            } else {
                return [...prevSelectedOptions, value];
            }
        });
    };

    const options = [
        'Ensino Médio Incompleto',
        'Ensino Médio Completo',
        'Técnico',
        'Superior Incompleto',
        'Superior Completo',
    ];

    const optionsLanguage = [
        'Nenhum',
        'Básico',
        'Intermediário',
        'Avançado',
    ];

    const optionsViagemNoturno = [
        'Nenhum',
        'Apenas se necessário',
        'Pouco disponível',
        'Muito disponível',
    ];

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const handleChangeJavascript = (event: any) => {
        setOptJavascript(event.target.value);
    };

    const handleChangeTypescript = (event: any) => {
        setOptTypescript(event.target.value);
    };

    const handleChangeNodejs = (event: any) => {
        setOptNodejs(event.target.value);
    };

    const handleChangeReact = (event: any) => {
        setOptReact(event.target.value);
    };

    const handleChangeNative = (event: any) => {
        setOptNative(event.target.value);
    };

    const handleChangeIngles = (event: any) => {
        setIngles(event.target.value);
    };

    const handleChangeEspanhol = (event: any) => {
        setEspanhol(event.target.value);
    };

    const handleChangeViagem = (event: any) => {
        setViagem(event.target.value);
    };

    const handleChangeNoturno = (event: any) => {
        setNoturno(event.target.value);
    };

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        {
            let file: any
            if (event.target.files) {
                file = event.target.files[0];
            }
            console.log(file);

            if (file) {

                try {
                    const data = new FormData();
                    data.append('selectedImage', file);

                    const response = await axios.post(
                        '', data,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        }
                    );

                    file = ''
                    console.log(response.data); // Handle the response as needed
                } catch (error) {
                    console.error('Error uploading image:', error);
                    file = ''
                }
            } else {
                console.log('file vazio');

            }
        }
    }

    const handleNull = () => {
        setCpf('');
        setName('');
        setDate('');
        setCel('');
        setCep('');
        setUF('');
        setDistrict('');
        setStreet('');
        setNum('');
        setComp('');
        setCity('');
        setEmail('');
        setSelectedOption('');
        setSal('0.00');
        setFilhos('0');
        setOptJavascript('Nenhum');
        setOptTypescript('Nenhum');
        setOptNodejs('Nenhum');
        setOptReact('Nenhum');
        setOptNative('Nenhum');
        setIngles('Nenhum');
        setEspanhol('Nenhum');
        setViagem('Nenhum');
        setNoturno('Nenhum');
        setInstagram('');
        setLinkedin('');
        setFacebook('');
        setGithub('');
        setSelectedOptions([])
        setSelectCarteira([])
        setEscolares('')
        setExperiencias('')
    }

    const handleSubmit = async () => {
        setLoading(true);
        setDisable(true);

        const fieldMappings: any = {
            cur_CPF: "CPF",
            cur_email: "Email",
            cur_nome_completo: "Nome Completo",
            cur_data_nasc: "Data de Nascimento",
            cur_pret_salarial: "Pretensão Salarial",
            cur_num_filhos: "Número de Filhos",
            cur_escolaridade: "Escolaridade",
            cur_cep: "CEP",
            cur_cidade: "Cidade",
            cur_bairro: "Bairro",
            cur_numero: "Número",
            cur_uf: "UF",
            cur_detalhes_escolares: "Detalhes Escolares",
            cur_detalhes_experiencia_profissional: "Detalhes Experiência Profissional",
            cur_area_interesse: "Área de Interesse",
            cur_nome_ingles: "Nome em Inglês",
            cur_nome_espanhol: "Nome em Espanhol",
            cur_disponibilidade_viagem: "Disponibilidade de Viagem",
            cur_trabalho_noturno: "Trabalho Noturno",
            cur_carteira_carro: "Carteira de Carro",
            cur_carteira_moto: "Carteira de Moto",
            cur_cel: "Celular"
        };

        const nullField = Object.entries(fieldMappings).find(([field,]) => data[field] === null || data[field] === '');
        if (nullField) {
            const [fieldName] = nullField;
            const fieldMapping = fieldMappings[fieldName] || fieldName;
            alert(`O campo '${fieldMapping}' está vazio. Por favor, preencha todos os campos.`);
            setLoading(false);
            setDisable(false);
            return;
        }

        try {
            const response = await axios.post('https://easypass-iak1.onrender.com/curriculo', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert('Currículo cadastrado com sucesso!');
                handleNull()
            } else {
                const errorMessage = response.data;
                alert(`Erro ao cadastrar currículo: ${errorMessage}`);
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar currículo para o servidor.');
        } finally {
            setLoading(false);
            setDisable(false);
        }
    };

    React.useEffect(() => {
        if (curriculo !== undefined) {
          setName(curriculo?.cur_nome_completo);
          setDate(curriculo?.cur_data_nasc);
          setCel(curriculo?.cur_cel);
          setCep(curriculo?.cur_cpf);
          setUF(curriculo?.cur_uf);
          setDistrict(curriculo?.cur_bairro);
          setStreet(curriculo?.cur_rua);
          setNum(curriculo?.cur_numero);
          setComp(curriculo?.cur_rua_complemento);
          setCity(curriculo?.cur_cidade);
          setEmail(curriculo?.cur_email);
          setSelectedOption(curriculo?.cur_escolaridade);
          setSal(curriculo?.cur_escolaridade);
          setFilhos(curriculo?.cur_num_filhos);
          setOptJavascript(curriculo?.cur_escolaridade);
          setOptTypescript(curriculo?.cur_escolaridade);
          setOptNodejs(curriculo?.cur_escolaridade);
          setOptReact(curriculo?.cur_escolaridade);
          setOptNative(curriculo?.cur_escolaridade);
          setIngles(curriculo?.cur_ingles);
          setEspanhol(curriculo?.cur_espanhol);
          setViagem(curriculo?.cur_disponibilidade_viagem);
          setNoturno(curriculo?.cur_trabalho_noturno);
          setInstagram(curriculo?.cur_instagram);
          setLinkedin(curriculo?.cur_linkedin);
          setFacebook(curriculo?.cur_facebook);
          setGithub(curriculo?.cur_github);
          setSelectedOptions(curriculo?.cur_escolaridade)
          setSelectCarteira(curriculo?.cur_escolaridade)
          setEscolares(curriculo?.cur_escolaridade)
          setExperiencias(curriculo?.cur_escolaridade)
        }
      }, [curriculo]);

    React.useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get(`https://easypass-iak1.onrender.com/curriculo/${cpf}`);
                setCurriculo(response.data);
                if (!response.data) {
                    console.log('Currículo não encontrado')
                }
            } catch (err) {
                console.log('Currículo não encontrado');
            }
        };

        if (cpf && cpf.length > 10 && !curriculo) {
            handleSearch()
        }
    }, [cpf])

    function formatDateString(date: string): string {
        let formattedString = date.replace(/\D/g, '');
        if (formattedString.length > 2) {
            formattedString = formattedString.slice(0, 2) + '-' + formattedString.slice(2);
        }
        if (formattedString.length > 5) {
            formattedString = formattedString.slice(0, 5) + '-' + formattedString.slice(5);
        }
        console.log(formattedString);

        return formattedString;
    }

    function handleSubmitData() {
        const formattedDate = formatDateString(date);
        const parts = formattedDate.split('-');
        const yyyy = parts[2];
        const mm = parts[1];
        const dd = parts[0];
        const formattedDateForDatabase = `${yyyy} - ${mm} - ${dd}`;
        console.log(formattedDateForDatabase);

        return formattedDateForDatabase;
    }

    const handleChangeCep = (event: { target: { value: string; }; }) => {
        let cepValue = event.target.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
        cepValue = cepValue.slice(0, 5) + '-' + cepValue.slice(5, 8); // Adiciona o traço na posição correta
        setCep?.(cepValue);
    }

    const handleApiCEP = async () => {
        const url = `https://cdn.apicep.com/file/apicep/${cep}.json`;
        try {
            const response = await axios.get(url);
            setUF?.(response.data.state);
            setCity?.(response.data.city);
            setDistrict?.(response.data.district);
            setStreet?.(response.data.address);
            setIsLoading(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event: any) => {
        let inputValue = event.target.value.replace(/\D/g, '');
        inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        setSal(inputValue);
    };

    console.log(selectedOptions);
    console.log(programador);
    console.log(optJavascript, optNative, optTypescript, optNodejs, optReact);
    console.log(ingles, espanhol);
    console.log(selectCarteira);
    console.log(data);

    console.log(curriculo);


    return (
        <>
            <Box sx={{
                height: '100%',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                background: verify ? fundo : 'white',
                [theme.breakpoints.down('sm')]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: 'auto',
                },
            }}>
                <Container sx={{
                    width: '80%',
                    height: '100%',
                    mb: 10
                }}>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontSize: {
                                xs: '8vw',
                                sm: '4vw',
                                md: '3.9vw',
                                lg: '3.5vw',
                                xl: '3.5vw',
                            },
                            color: verify ? "white" : colors.tc,
                            fontWeight: 'bold'
                        }}>
                            Cadastro RH
                        </Typography>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10,
                    }}>
                        <span style={{
                            color: verify ? "white" : "black",
                        }}>
                            Caso já tenha cadastro e deseja atualiza-lo, digite seu CPF.
                        </span>

                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600',
                            mt: 5
                        }}>
                            Dados Pessoais
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3
                    }}>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                CPF
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                inputProps={{ maxLength: 11 }}
                                required
                                value={cpf}
                                placeholder="Insira apenas os números do CPF"
                                onChange={(event) => {
                                    const { value } = event.target;
                                    const newValue = value.replace(/\D/g, ''); // remove tudo que não é número
                                    setCpf(newValue);
                                }}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Email
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 45 }}
                                required
                                placeholder="Insira seu email"
                                id="input-with-icon-adornment"
                                value={email}
                                onChange={(event) => setEmail?.(event.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                }
                                sx={{
                                    fontSize: '14px', outline: 0
                                }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Nome Completo
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
                                        <Badge />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Data de Nascimento
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 10 }}
                                required
                                id="input-with-icon-adornment"
                                value={date}
                                placeholder="24-08-2005"
                                onChange={(event) => setDate(formatDateString(event.target.value))}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <CalendarMonth />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Número de Celular
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 11 }}
                                required
                                id="input-with-icon-adornment"
                                value={cel}
                                placeholder="24999123456"
                                onChange={(event) => setCel(event.target.value.replace(/\D/g, ''))}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Contacts />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Pretensão de Salário
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 11 }}
                                required
                                id="input-with-icon-adornment"
                                value={sal}
                                onChange={handleInputChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <span>R$</span>
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Número de Filhos
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 11 }}
                                required
                                id="input-with-icon-adornment"
                                value={filhos}
                                onChange={(event) => setFilhos(event.target.value.replace(/\D/g, ''))}
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                            <TextField
                                select
                                label="Escolaridade"
                                value={selectedOption}
                                onChange={handleChange}
                                sx={{ width: '100%' }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </Container>

                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Endereço Residencial
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3
                    }}>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                CEP
                            </InputLabel>
                            <Input
                                placeholder="Insira o CEP"
                                inputProps={{ maxLength: 12 }}
                                required
                                id="input-with-icon-adornment"
                                value={cep}
                                onChange={handleChangeCep}
                                onBlur={handleApiCEP}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Apartment />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Cidade
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 25 }}
                                required
                                id="input-with-icon-adornment"
                                value={city}
                                readOnly
                                disabled={isLoading}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LocationCity />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Bairro
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 45 }}
                                required
                                id="input-with-icon-adornment"
                                value={district}
                                readOnly
                                disabled={isLoading}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Groups />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Rua
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 45 }}
                                required
                                id="input-with-icon-adornment"
                                value={street}
                                readOnly
                                disabled={isLoading}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Signpost />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Complemento
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 50 }}
                                placeholder="Exemplo: Casa de baixo"
                                required
                                id="input-with-icon-adornment"
                                value={comp}
                                onChange={(event) => setComp?.(event.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PlaylistAdd />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Número
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 10 }}
                                required
                                id="input-with-icon-adornment"
                                value={num}
                                onChange={(event) => setNum?.(event.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Home />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                        <FormControl variant="standard" sx={{ width: '100%', mb: '20px' }}>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                UF
                            </InputLabel>
                            <Input
                                inputProps={{ maxLength: 2 }}
                                required
                                id="input-with-icon-adornment"
                                value={UF}
                                readOnly
                                disabled={isLoading}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Domain />
                                    </InputAdornment>
                                }
                                sx={{ fontSize: '14px' }}
                            />
                        </FormControl>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Currículo
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3
                    }}>
                        <TextField
                            id="filled-multiline-static"
                            label="Detalhe sua escolaridade, cursos e certificações concluídas ou em andamento."
                            multiline
                            rows={10}
                            variant="filled"
                            onChange={(e) => setEscolares(e.target.value)}
                        />
                        <TextField
                            sx={{ mt: 5 }}
                            id="filled-multiline-static"
                            label="Detalhe sua experiência profissional."
                            multiline
                            rows={10}
                            variant="filled"
                            onChange={(e) => setExperiencias(e.target.value)}
                        />
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Sua área de interesse
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Você pode marcar suas áreas de interesse dentro da nossa empresa. Mesmo que não tenhamos uma vaga para esse setor escolhido no momento, você ficará registrado como interessado. Aceita-se múltipla escolha.
                            </Typography>
                        </Balancer>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                            }}>
                                Atenção: Para facilitar o processo de triagem de candidatos marque somente as áreas que você realmente tiver interesse, principalmente para a área de "Programador". Candidatos que marcarem a opção "Programador" e não forem habilitados para tal, também não concorrerão às outras vagas.
                            </Typography>
                        </Balancer>
                        <FormControl component="fieldset" sx={{ mt: 5 }}>
                            <FormGroup sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}>
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Programador')}
                                            onChange={handleOptionChange}
                                            value="Programador"
                                        />
                                    }
                                    label="Programador"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Comercial')}
                                            onChange={handleOptionChange}
                                            value="Comercial"
                                        />
                                    }
                                    label="Comercial"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Atendimento')}
                                            onChange={handleOptionChange}
                                            value="Atendimento"
                                        />
                                    }
                                    label="Atendimento"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Contábil')}
                                            onChange={handleOptionChange}
                                            value="Contábil"
                                        />
                                    }
                                    label="Contábil"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Suporte')}
                                            onChange={handleOptionChange}
                                            value="Suporte"
                                        />
                                    }
                                    label="Suporte"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Financeiro')}
                                            onChange={handleOptionChange}
                                            value="Financeiro"
                                        />
                                    }
                                    label="Financeiro"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Auxiliar Administrativo')}
                                            onChange={handleOptionChange}
                                            value="Auxiliar Administrativo"
                                        />
                                    }
                                    label="Auxiliar Administrativo"
                                />
                                <FormControlLabel
                                    sx={{
                                        color: verify ? "white" : colors.tc,
                                    }}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.includes('Marketing')}
                                            onChange={handleOptionChange}
                                            value="Marketing"
                                        />
                                    }
                                    label="Marketing"
                                />
                            </FormGroup>
                        </FormControl>
                    </Container>
                    {programador && (
                        <>
                            <Container sx={{
                                width: '100%',
                                height: 'auto',
                                mt: 10
                            }}>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '3.5vw',
                                        sm: '2vw',
                                        md: '2vw',
                                        lg: '1.5vw',
                                        xl: '1.4vw',
                                    },
                                    textAlign: 'left',
                                    color: verify ? "white" : "black",
                                    fontWeight: '600'
                                }}>
                                    Conhecimentos Programação
                                </Typography>
                            </Container>
                            <Container sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                height: 'auto',
                                mt: 3,
                            }}>
                                <Balancer>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: "2.2vw",
                                            sm: "1.5vw",
                                            md: "1.2vw",
                                            lg: "1vw",
                                            xl: "1vw",
                                        },
                                        textAlign: 'left',
                                        color: verify ? "white" : "black",
                                        mb: 3
                                    }}>
                                        Informe corretamente seu grau de conhecimento nessas linguagens.
                                    </Typography>
                                </Balancer>
                                <Container sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    gap: 3,
                                    mt: 3,
                                    [theme.breakpoints.down('md')]: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        flexWrap: 'nowrap',
                                    },
                                }}>
                                    <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                        <TextField
                                            select
                                            label="Javascript"
                                            value={optJavascript}
                                            onChange={handleChangeJavascript}
                                            sx={{ width: 300 }}
                                        >
                                            {optionsLanguage.map((options) => (
                                                <MenuItem key={options} value={options}>
                                                    {options}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                        <TextField
                                            select
                                            label="Typescript"
                                            value={optTypescript}
                                            onChange={handleChangeTypescript}
                                            sx={{ width: 300 }}
                                        >
                                            {optionsLanguage.map((options) => (
                                                <MenuItem key={options} value={options}>
                                                    {options}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                        <TextField
                                            select
                                            label="Framework React"
                                            value={optReact}
                                            onChange={handleChangeReact}
                                            sx={{ width: 300 }}
                                        >
                                            {optionsLanguage.map((options) => (
                                                <MenuItem key={options} value={options}>
                                                    {options}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                        <TextField
                                            select
                                            label="Framework Node.js"
                                            value={optNodejs}
                                            onChange={handleChangeNodejs}
                                            sx={{ width: 300 }}
                                        >
                                            {optionsLanguage.map((options) => (
                                                <MenuItem key={options} value={options}>
                                                    {options}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                        <TextField
                                            select
                                            label="Framework React Native"
                                            value={optNative}
                                            onChange={handleChangeNative}
                                            sx={{ width: 300 }}
                                        >
                                            {optionsLanguage.map((options) => (
                                                <MenuItem key={options} value={options}>
                                                    {options}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                                </Container>
                            </Container>
                        </>
                    )}
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Idiomas
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3,
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Atenção: se você marcar conhecimento de inglês ou espanhol acima do básico você irá fazer a entrevista no idioma escolhido, só marque Intermediário e avançado se você realmente tiver segurança e fluência na língua.                            </Typography>
                        </Balancer>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 3,
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                            },
                        }}>
                            <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                <TextField
                                    select
                                    label="Inglês"
                                    value={ingles}
                                    onChange={handleChangeIngles}
                                    sx={{ width: 300 }}
                                >
                                    {optionsLanguage.map((options) => (
                                        <MenuItem key={options} value={options}>
                                            {options}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                <TextField
                                    select
                                    label="Espanhol"
                                    value={espanhol}
                                    onChange={handleChangeEspanhol}
                                    sx={{ width: 300 }}
                                >
                                    {optionsLanguage.map((options) => (
                                        <MenuItem key={options} value={options}>
                                            {options}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Container>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Viagem e trabalho noturno
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3,
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Em algumas áreas que você aplicar precisará de ter um certo grau de disponibilidade para viagens ou trabalho noturno.
                            </Typography>
                        </Balancer>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 3,
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                            },
                        }}>
                            <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                <TextField
                                    select
                                    label="Disponibilidade de Viagem"
                                    value={viagem}
                                    onChange={handleChangeViagem}
                                    sx={{ width: 300 }}
                                >
                                    {optionsViagemNoturno.map((options) => (
                                        <MenuItem key={options} value={options}>
                                            {options}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: 'auto', mb: 5 }}>
                                <TextField
                                    select
                                    label="Disponibilidade de Trabalho Noturno"
                                    value={noturno}
                                    onChange={handleChangeNoturno}
                                    sx={{ width: 300 }}
                                >
                                    {optionsViagemNoturno.map((options) => (
                                        <MenuItem key={options} value={options}>
                                            {options}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Container>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Carteira de motorista
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3,
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Não é uma exigência, mas em algumas áreas pode ser vantajoso ter uma carta de condução.
                            </Typography>
                        </Balancer>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 3,
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                            },
                        }}>
                            <FormControl component="fieldset">
                                <FormGroup sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap'
                                }}>
                                    <FormControlLabel
                                        sx={{
                                            color: verify ? "white" : colors.tc,
                                        }}
                                        control={
                                            <Checkbox
                                                checked={selectCarteira.includes('Carro')}
                                                onChange={handleOptionChangeCarteira}
                                                value="Carro"
                                            />
                                        }
                                        label="Carro"
                                    />
                                    <FormControlLabel
                                        sx={{
                                            color: verify ? "white" : colors.tc,
                                        }}
                                        control={
                                            <Checkbox
                                                checked={selectCarteira.includes('Moto')}
                                                onChange={handleOptionChangeCarteira}
                                                value="Moto"
                                            />
                                        }
                                        label="Moto"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Container>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Rede social
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3,
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Gostriamos de conhever você um pouco mais, coloque suas redes sociais. Copie a URL do seu perfil e cole aqui.
                            </Typography>
                        </Balancer>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 3,
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                            },
                        }}>
                            <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                                <TextField id="filled-basic" variant="filled"
                                    inputProps={{ maxLength: 45 }}
                                    required
                                    placeholder="Instagram"
                                    value={instagram}
                                    onChange={(event) => setInstagram?.(event.target.value)}
                                    sx={{
                                        fontSize: '14px', outline: 0
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                                <TextField id="filled-basic" variant="filled"
                                    inputProps={{ maxLength: 45 }}
                                    required
                                    placeholder="Linkedin"
                                    value={linkedin}
                                    onChange={(event) => setLinkedin?.(event.target.value)}
                                    sx={{
                                        fontSize: '14px', outline: 0
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                                <TextField id="filled-basic" variant="filled"
                                    inputProps={{ maxLength: 45 }}
                                    required
                                    placeholder="Github"
                                    value={github}
                                    onChange={(event) => setGithub?.(event.target.value)}
                                    sx={{
                                        fontSize: '14px', outline: 0
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="standard" sx={{ width: '100%', mb: 5 }}>
                                <TextField id="filled-basic" variant="filled"
                                    inputProps={{ maxLength: 45 }}
                                    required
                                    placeholder="Facebook"
                                    value={facebook}
                                    onChange={(event) => setFacebook?.(event.target.value)}
                                    sx={{
                                        fontSize: '14px', outline: 0
                                    }}
                                />
                            </FormControl>
                        </Container>
                    </Container>
                    <Container sx={{
                        width: '100%',
                        height: 'auto',
                        mt: 10
                    }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '3.5vw',
                                sm: '2vw',
                                md: '2vw',
                                lg: '1.5vw',
                                xl: '1.4vw',
                            },
                            textAlign: 'left',
                            color: verify ? "white" : "black",
                            fontWeight: '600'
                        }}>
                            Foto
                        </Typography>
                    </Container>
                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: 'auto',
                        mt: 3,
                    }}>
                        <Balancer>
                            <Typography sx={{
                                fontSize: {
                                    xs: "2.2vw",
                                    sm: "1.5vw",
                                    md: "1.2vw",
                                    lg: "1vw",
                                    xl: "1vw",
                                },
                                textAlign: 'left',
                                color: verify ? "white" : "black",
                                mb: 3
                            }}>
                                Anexe uma foto de perfil na sua ficha.
                            </Typography>
                        </Balancer>
                        <Container sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 3,
                            mb: 5,
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flexWrap: 'nowrap',
                            },
                        }}>

                            <label htmlFor="file-input" style={{ marginBottom: 3 }}>
                                <IconButton
                                    sx={{
                                        width: 'auto',
                                        height: 'auto',
                                        '&:hover': {
                                            boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                    onClick={() => {
                                        if (fileInputRefAvatar.current) {
                                            fileInputRefAvatar.current.click()
                                        }
                                    }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="file-input"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                        ref={fileInputRefAvatar}
                                        onClick={handleActivePerfil}
                                    />
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={perfil}
                                        sx={{ width: 70, height: 70, }}
                                    />
                                </IconButton>
                            </label>
                        </Container>
                        <BtnL loading={loading} dis={disable} handleLogin={handleSubmit} name={"Enviar"} cl={verify ? colors.pm : "white"} bc={verify ? 'white' : undefined} bch={verify ? 'white' : undefined} route={""} />

                    </Container>
                </Container>
            </Box >
        </>
    )
}
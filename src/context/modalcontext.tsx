import { createContext } from 'react';
import { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'; // Importe o createTheme
import { UserData } from "../components/interfaces";

interface ModalContextType {
    verify: boolean;
    email?: string;
    setEmail?: (email: string) => void;
    password?: string;
    setPassword?: (password: string) => void;
    cep?: string;
    setCep?: (cep: string) => void;
    UF?: string;
    setUF?: (UF: string) => void;
    district?: string;
    setDistrict?: (district: string) => void;
    street?: string;
    setStreet?: (street: string) => void;
    num?: string;
    setNum?: (num: string) => void;
    comp?: string;
    setComp?: (comp: string) => void;
    city?: string;
    setCity?: (city: string) => void;
    loginbool?: boolean;
    setLog?: (loginbool: boolean) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    themes: Theme; // Você pode definir o tipo correto do objeto 'themes' se necessário
    hasEntered: boolean;
    setHasEntered: (hasEntered: boolean) => void;
    userData?: UserData | null; // Atualize a tipagem para UserData | null
    setUserData?: (UserData: UserData | null) => void; // Atualize a assinatura da função setUserData
    alertatopo?: any;
    setAlertaTopo?: (alertatopo: any) => void;
    MsgContext?: any;
    setRecivedContext?: (MsgContext: any) => void;
    cpf?: any;
    setCpf?: (MsgContext: any) => void;
}
const throwNotImplementedError = () => {
    throw new Error('Function not implemented');
};

const defaultTheme = createTheme();

const ModalContext = createContext<ModalContextType>({
    verify: false,
    email: '',
    setEmail: throwNotImplementedError,
    password: '',
    setPassword: throwNotImplementedError,
    cep: '',
    setCep: throwNotImplementedError,
    UF: '',
    setUF: throwNotImplementedError,
    district: '',
    setDistrict: throwNotImplementedError,
    street: '',
    setStreet: throwNotImplementedError,
    num: '',
    setNum: throwNotImplementedError,
    comp: '',
    setComp: throwNotImplementedError,
    city: '',
    setCity: throwNotImplementedError,
    loginbool: false,
    setLog: throwNotImplementedError,
    darkMode: false,
    setDarkMode: throwNotImplementedError,
    themes: defaultTheme,
    hasEntered: false,
    setHasEntered: throwNotImplementedError,
    userData: null,
    setUserData: throwNotImplementedError,
    alertatopo: {},
    setAlertaTopo: throwNotImplementedError,
    MsgContext: {},
    setRecivedContext: throwNotImplementedError,
    cpf: '',
    setCpf: throwNotImplementedError
});

export default ModalContext;

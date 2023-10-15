import { createContext, useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";

interface AuthContextType {
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthProviderHomeProps {
    children: ReactNode;
}



function exit() {
    try {
        console.log('ta indo');
        localStorage.removeItem('token');
        window.location.reload()
    } catch (err) {
        console.log(err);
    }
}

async function verifyToken(token: string) {
    try {
        const result = await axios.post("https://easypass-iak1.onrender.com/user/testetoken", {
            token: token
        });

        console.log('Resultado', result);
        return true; // Token é válido
    } catch (error: any) {
        console.log('Mensagem de erro: ', error.message);
        return false; // Token é inválido ou expirado
    }
}


const AuthContext = createContext<AuthContextType>({ isAuthenticated: false });

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isTokenChecked, setIsTokenChecked] = useState(false);
    const token = localStorage.getItem('token');


    useEffect(() => {
        async function checkToken() {
            if (token) {
                setIsAuthenticated(true);
                try {
                    const a = await verifyToken(token);
                    console.log('Se true é token se false é expirado', a);
                    if (!a) {
                        exit();
                    }
                } catch (error) {
                    console.error('Erro ao verificar o token: ', error);
                }
            }
            setIsTokenChecked(true);
        }
    
        checkToken();
    }, []);

    if (!isTokenChecked) {
        // Aguardando verificação do token
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/cadastro" replace />;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

const AuthProviderHome = ({ children }: AuthProviderHomeProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isTokenChecked, setIsTokenChecked] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function checkToken() {
            if (token) {
                setIsAuthenticated(true);
                try {
                    const a = await verifyToken(token);
                    console.log('Se true é token se false é expirado', a);
                    if (!a) {
                        exit();
                    }
                } catch (error) {
                    console.error('Erro ao verificar o token: ', error);
                }
            }
            setIsTokenChecked(true);
        }
    
        checkToken();
    }, []);

    if (!isTokenChecked) {
        // Aguardando verificação do token
        return null;
    }

    if (isAuthenticated) {
        return <Navigate to="/Sistema" replace />;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthProviderHome, AuthContext };
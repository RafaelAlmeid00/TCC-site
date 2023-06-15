import { createContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isTokenChecked, setIsTokenChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userJson = localStorage.getItem('user');
        const userData = userJson ? JSON.parse(userJson) : null;
        
        if (token || userData) {
            setIsAuthenticated(true);
        }
        setIsTokenChecked(true);
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


const AuthProviderHome = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isTokenChecked, setIsTokenChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsTokenChecked(true);
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

export { AuthProvider, AuthProviderHome };

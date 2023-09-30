import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";

export function Deccode() {
    const userToken = localStorage.getItem('token') || null;
    return jwt_decode(String(userToken));
}

export function DeccodeItem() {
    const userItem = localStorage.getItem('item') || null;
    return jwt_decode(String(userItem));
}
export function DecodedItem2() {
    
    var test: any = {v: jwt_decode(String(localStorage.getItem('item')))};
    console.log('teste nesse prr: ', test.v.verified);
    if (test.v.verified == true) {
        console.log('é true papai');
        
        return '/cadastro/alterarSenha'
    }else{
        console.log('fake d+ slk');
        
        return 'erro'
    }
    
}
export function removeToken() {
    return localStorage.removeItem('token');
}

export function UserDataLoader({ children }: any) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function loadUserData() {
            try {
                const decodedData: any = await Deccode();
                setUserData(decodedData);
            } catch (error) {
                // Trate qualquer erro ao decodificar o token aqui
                console.error("Erro ao decodificar o token:", error);
                setUserData(null);
            }
        }

        loadUserData();
    }, []);

    return children(userData);
}

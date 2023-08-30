import axios from "axios";
import jwt_decode from "jwt-decode";
import React from "react";
import { useState, useEffect } from "react";
const userToken = localStorage.getItem('token') || null;

export function Deccode() {

    if (userToken) {
        return jwt_decode(userToken);
    } else {
        // Retorne algum valor de erro ou padrão, ou lance uma exceção
        console.error("Token não encontrado.");
        return null;
    }
}

export async function BuscarCliente() {
    const userData = await Deccode()
    const cpf = userData.user_CPF
    try {
        const response = await axios.post('http://localhost:3344/cliente/search', {
            token: userToken,
            user_CPF: cpf
        })
        console.log(response.data.customers[0])
        const cliente = response.data.customers[0]
        return cliente
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export function DeccodeItem() {
    const userItem = localStorage.getItem('item') || null;
    return jwt_decode(String(userItem));
}

export function removeToken() {
    return localStorage.removeItem('token');
}

export function UserDataLoader({ children }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function loadUserData() {
            try {
                const decodedData = await Deccode();
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

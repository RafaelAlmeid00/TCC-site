import { io, Socket } from "socket.io-client";

interface CustomSocket extends Socket {
    auth: {
        token?: string;
    };
}

const createCustomSocket = (token?: string): CustomSocket => {
    const socket = io("http://easypass-iak1.onrender.com", {
        autoConnect: false,
        auth: {
            token: token,
        },
        withCredentials: true,
    });

    return socket as CustomSocket;
};

// Obtenha o token do localStorage
const tokenuser = localStorage.getItem('token');
const token = tokenuser ? tokenuser : '';

console.log(token);

// Crie o socket personalizado
export const socket: CustomSocket = createCustomSocket(token);

console.log(socket);

import { useEffect } from "react";
import { io } from "socket.io-client";
const token = localStorage.getItem('token')


export const socket = io("http://localhost:3345", {
    autoConnect: false,
    auth: {
        token: token
    },
    withCredentials: true,
});

console.log(socket);


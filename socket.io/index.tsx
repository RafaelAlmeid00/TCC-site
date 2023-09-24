import { io } from "socket.io-client";
const token = localStorage.getItem('token')
console.log(token);


export const socket = io("http://localhost:3345", {
    autoConnect: false,
    auth: {
        token: localStorage.getItem('token')
    },
    withCredentials: true,
});

console.log(socket);


import { io } from "socket.io-client";
const token = localStorage.getItem('token')
console.log(token);


export const socket = io("http://localhost:3344", {
    autoConnect: false,
    auth: {
        token: token
    },
    withCredentials: true,
});

console.log(socket);


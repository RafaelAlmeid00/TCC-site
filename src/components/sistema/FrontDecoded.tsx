//import { useState } from "react";
import jwt_decode from "jwt-decode";
const userToken = localStorage.getItem('token');

export function Deccode (){
    return jwt_decode(String(userToken));
}

export function removeToken() {
    return localStorage.removeItem('token');
}
import * as api from '../api/api.js';
import {
    setUserData,
    clearUserData
} from '../util.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    const user = await api.postRequest(endpoints.login, {
        email,
        password
    });

    setUserData(user);
}

export async function register(email, password) {
    const user = await api.postRequest(endpoints.register, {
        email,
        password
    });
    setUserData(user);
   
}

export async function logout() {
    api.getRequest(endpoints.logout);
    clearUserData();
}
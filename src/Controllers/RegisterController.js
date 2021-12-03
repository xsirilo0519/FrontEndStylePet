import React from 'react';
import axios from 'axios';
import RegisterCmponent from '../Components/Views/Register';

const URL_BASE = 'http://localhost:8080/'

const Register = () => {
    const saveRegister = (data) => axios.post(`${URL_BASE}/register`, data);
    return <RegisterCmponent saveRegister={saveRegister}/>
}

export default Register;
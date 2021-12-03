import React, { useContext } from 'react';
import { Navigate ,Route, Routes } from 'react-router';
import Home from './Home'
import {Mascotas} from '../Controllers/MascotasController'
import {Citas} from '../Controllers/CitasController'
import NotFound from './NoFound'
import { UserContext } from '../Context/UserContext';
import {Login,Cerrar} from '../Controllers/UserController';
import SignIn from './Pages/SingInPage';
import Perfil from './Pages/PerfilPage';


function Rutas() { 
    const {isLogin}=useContext(UserContext);
    const privateRoute=()=>{
         return <Navigate to="/Login"></Navigate>
        }

    return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Mis_Mascotas" exact element={ isLogin?<Mascotas/>:privateRoute()}/>
        <Route path="/Citas" exact element={isLogin?<Citas/>:privateRoute()}/>
        <Route path="/Login" exaxt element={isLogin?<Home/>:<Login/>}/>
        <Route path="/Cerrar" exaxt element={isLogin?<Cerrar/>:<Home/>}/>
        <Route path="/Perfil" exaxt element={isLogin?<Perfil/>:<SignIn/>}/>
        <Route path="/404" exact element={<NotFound/>}/>
        <Route path="/Signin" exaxt element={isLogin?<Home/>:<SignIn/>}/>
        <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
    </Routes>
    );
}

export default Rutas;
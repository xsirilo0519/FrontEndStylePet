import React from 'react';
import { Navigate ,Route, Routes } from 'react-router';
import Home from './Home'
import MisMascotas from './Pages/MisMascotasPage'
import Citas from './Pages/CitasPage'
import NotFound from './NoFound'


function Rutas() {


    return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Mis_Mascotas" exact element={<MisMascotas/>}/>
        <Route path="/Citas" exact element={<Citas/>}/>
        <Route path="/404" exact element={<NotFound/>}/>
        <Route  path="*" element={<Navigate to="/404"></Navigate>}></Route>
    </Routes>
    );
}

export default Rutas;
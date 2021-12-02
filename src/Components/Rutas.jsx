import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home'
import MisMascotas from './MisMascotas'
import Citas from './Citas'


function Rutas() {
    return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Mis_Mascotas" exact element={<MisMascotas/>}/>
        <Route path="/Citas" exact element={<Citas/>}/>
    </Routes>
    );
}

export default Rutas;
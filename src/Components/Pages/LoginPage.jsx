import React from 'react';
import {Link} from 'react-router-dom';

import '../../Style/login.css'

function LoginPage({usuario,guardarUsuario,loguear,msg}) {
    
    const { email, contrasena } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form">
                <h1>Iniciar sesión</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="contrasena">contraseña</label>
                        <input 
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            placeholder="Tu contrasena"
                            value={contrasena}
                            onChange={onChange}
                        />
                    </div>
                    <span>{msg}</span>
                        <div className="campo-form">
                            <button type="button" className="btn btn-block" onClick={(e)=>{loguear(e)}}>Iniciar Sesión</button>
                            ó&nbsp;
                            <br />
                            <button type="button" className="btn btn-block"><Link to="/Register">Crear cuenta</Link></button>
                        </div>
                  </form>
            </div>
        </div>
     );
}
 
export default LoginPage;
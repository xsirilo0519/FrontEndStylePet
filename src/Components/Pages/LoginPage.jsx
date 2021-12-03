import React from 'react';
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
                        <label htmlFor="contrasena">contrasena</label>
                        <input 
                            type="contrasena"
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
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;
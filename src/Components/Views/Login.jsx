import React, { useState} from 'react';
import '../../Style/login.css'

function Login() {
    
    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        contrasena: ''
    });

    //Extraer de usuario
    const { email, contrasena } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
        console.log(e.target.name, e.target.value);
    }

    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();   
        //TODO: agregar aqui la llamada del controllador
        console.log('VALUES =>>', usuario);
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

                    <div className="campo-form">
                        <button type="button" className="btn btn-block" onClick={onSubmit}>Iniciar Sesión</button>
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default Login;
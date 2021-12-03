import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../../Style/login.css";

function Register({ saveRegister }) {
  //State para iniciar sesión
  const [usuario, guardarUsuario] = useState({});
  const navigate = useNavigate();
  //Extraer de usuario
  const { contrasena, celular, email, name, cedula, confirm = "" } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  const validate = () => {
    if (!validateField(cedula)) {
      alert("La cedula es obligatoria");
      return false;
    }
    if (!validateField(name)) {
      alert("El nombre es obligatorio");
      return false;
    }
    if (!validateField(email)) {
      alert("El email es obligatorio");
      return false;
    }
    if (!validateField(celular)) {
      alert("El celular es obligatoria");
      return false;
    }

    if (!validateField(contrasena)) {
      alert("La contraseña es obligatoria");
      return false;
    }

    if (!validateField(confirm)) {
      alert("La contraseña es obligatoria");
      return false;
    }
    if (!validateField(contrasena)) {
      alert("La confirmacion de contraseña obligatoria");
      return false;
    }
    if (contrasena !== confirm) {
      alert("alerta las contraeñas no coinciden");
      return false;
    }
    return true;
  };

  const validateField = (field) => {
    return [undefined, null, "", 0].indexOf(field) === -1;
  };

  //Cuando el usuario quiere iniciar sesión
  const save = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await saveRegister(usuario);
      //response.data;
      navigate("/Login");
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form">
        <h1>Crea una cuenta</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="cedula">Cedula</label>
            <input
              type="number"
              id="cedula"
              name="cedula"
              placeholder="Tu Cedula"
              value={cedula}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="celular">celular</label>
            <input
              type="number"
              id="celular"
              name="celular"
              placeholder="Tu celular"
              value={celular}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="contrasena">contrasena</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Tu contraseña"
              value={contrasena}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirmar contraseña</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirma tu contraseña"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <button type="button" className="btn btn-block" onClick={save}>
              Registrarse
            </button>
            ó&nbsp;
            <br />
            <button type="button" className="btn btn-block"><Link to="/Login">Cancelar</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

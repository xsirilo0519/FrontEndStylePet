import React from 'react';

function PerfilPage({ edit,usuario,guardarUsuario}) {

  const { celular="", name=""} = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!validateField(name)) {
      alert("El nombre es obligatorio");
      return false;
    }
    if (!validateField(celular)) {
      alert("El celular es obligatorio");
      return false;
    }

    return true;
  };

  const validateField = (field) => {
    return [undefined, null, "", 0].indexOf(field) === -1;
  };

  //Cuando el usuario quiere iniciar sesión
  const validarDatos = async (e) => {
    e.preventDefault();
    if (validate()) {
      edit()
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form">
        <h1>Editar Perfil</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="celular">celular</label>
            <input
              type="number"
              id="celular"
              name="celular"
              placeholder="Tu Celular"
              value={celular}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <button type="button" className="btn btn-block" onClick={validarDatos}>
              Editar
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default PerfilPage;
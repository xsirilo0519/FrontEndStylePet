import React from "react";
import eliminar from '../../assets/delete.png';
function CitasPage({list,cancelarCita}) {
  return (
    <div className="NormalPage">
      <table >
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Corte</th>
          <th>Precio</th>
          <th>Estilista</th>
          <th>hora</th>
          <th>Mascota</th>
          <th>Tipo</th>
          <th>Dueño</th>
          <th>Eliminar</th>
        </tr>
        </thead>
        {
            list.length>0?
            list.map((cita)=>{
                return (
        <tbody key={cita.codigo}>
        <tr>
          <td>{cita.codigo}</td>
          <td>{cita.id_corte.name}</td>
          <td>{cita.id_corte.precio}</td>
          <td>{cita.estilista.name}</td>
          <td>{cita.hora}</td>
          <td>{cita.codigo_mascota.name}</td>
          <td>{cita.codigo_mascota.tipo.name}</td>
          <td>{cita.codigo_mascota.propietario.name}</td>
          <td><li className="li-short" style={{ backgroundImage: "url(" + eliminar + ")" }} onClick={()=>{cancelarCita(cita.codigo,cita.estilista.cedula,cita.hora)}} ></li></td>
        </tr>
        </tbody>
                )
            }):null
        }
      </table>
    </div>
  );
}

export default CitasPage;

import React from "react";
function CitasPage() {
  return (
    <div className="NormalPage">
      citas
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
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Soleado</td>
          <td>Mayormente soleado</td>
          <td>Parcialmente nublado</td>
          <td>Soleado</td>
          <td>Mayormente soleado</td>
          <td>Parcialmente nublado</td>
          <td>Soleado</td>
          <td>Mayormente soleado</td>
          <td>Parcialmente nublado</td>
          <td>Soleado</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CitasPage;

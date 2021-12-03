import React from 'react';
import '../../Style/Mascotas.css'
import eliminar from '../../assets/delete.png'
import edit from '../../assets/edit.png'
import { Fragment } from 'react';
function MisMascotasPage({mascotas,eliminarMascota,editarMascotaModo}) {
    return (
        <div className="NormalPage">
            <div className="Card-container">
                {
        
                    mascotas.length>0?mascotas.map((item)=>{
                        return(
                            <div className="Card" key={item.codigo}>
                            <div className="p-container">
                            <p>{item.tipo.name}</p><br/>
                            <p>{item.name}</p>
                            </div>
                            <li className="li-short" style={{ backgroundImage: "url(" + edit + ")" }} onClick={()=>{editarMascotaModo(item)}} ></li>
                            <li className="li-short" style={{ backgroundImage: "url(" + eliminar + ")" }} onClick={()=>{eliminarMascota(item.codigo)}}  ></li>
                        </div>
                        )
                    }):null
                }
            </div>
        </div>
    );
}

export default MisMascotasPage;
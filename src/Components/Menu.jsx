import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Menu({Menu}) {
    return (
        <Fragment>
            {
                Menu.map((item)=>{
                    return  <Link to={item.url} className="Menu-Button" key={item.url} >{item.titulo}</Link>
                })
            }
        </Fragment>
    );
}

export default Menu;
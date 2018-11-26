import React from 'react';

import {MenuItems} from '../../services/api';
import MenuItem from './menu-item';

const Menu = () =>{
    return (
        <div className="menu">
            {MenuItems.map((item, i)=>{
                console.log(item);
                return <MenuItem key={i} {...item}></MenuItem>
            })}
        </div>
    )
}

export default Menu;
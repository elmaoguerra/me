import React from 'react';

const MenuItem = (props) =>{
    return (
        <div>
            <a className="menu-item" href={props.href}>
                {props.title}
            </a>
        </div>
    )
}

export default MenuItem;
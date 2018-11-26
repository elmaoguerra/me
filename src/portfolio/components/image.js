import React from 'react';

const Image= (props) =>{
    return(
        <img src={props.src} className={props.className}></img>
    )
}

export default Image;
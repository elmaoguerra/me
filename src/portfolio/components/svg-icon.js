import React from 'react'

const SvgIcon = (props) =>{
    return (
        <svg viewBox={props.viewBox} xmlns="http://www.w3.org/2000/svg">
            {props.children}
        </svg>
    )
}

export default SvgIcon;
import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className, style, id }) => {
    return (
        <button
            className={`custom-button ${className || ''}`}
            onClick={onClick}
            style={style}
            id={id}
        >
            {children}
        </button>
    );
};

export default Button;

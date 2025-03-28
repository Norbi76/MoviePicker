import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className, style }) => {
    return (
        <button
            className={`custom-button ${className || ''}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;

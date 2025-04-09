import React from 'react';
import './Container.css'; // Import the CSS file

const Container = ({ children, style}) => {
    return (
        <div
            className="container"
            style={ style }
        >
            {children}
        </div>
    );
};

export default Container;
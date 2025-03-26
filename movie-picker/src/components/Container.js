import React from 'react';
import './Container.css'; // Import the CSS file

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;
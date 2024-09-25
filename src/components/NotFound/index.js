import React from "react";
import './style.css'

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Not Found </h1>
            <a 
                href="/" 
                className="not-found-button">
                Volver a la home
            </a>
        </div>
    );
}

export default NotFound;
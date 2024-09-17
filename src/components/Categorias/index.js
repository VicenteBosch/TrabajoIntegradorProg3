import React from "react";
import Categoria from "../Categoria";
import "./style.css";

function Categorias() {
    const categoriasBar = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5", "Categoria 6" ];

    return (
        <section className="general-data">
            {categoriasBar.map((elm , idx) => 
                <Categoria
                    
                    key={idx}
                    categoria={elm} 
                    
                />
            )}
        </section>
    );
}

export default Categorias;
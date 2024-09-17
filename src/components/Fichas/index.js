import React from "react";
import Ficha from "../Ficha"
import "./style.css"


function Fichas() {

    const fichasData = [
        { titulo: "Products in database", datos: "135", imagen: "fa-clipboard-list" },
        { titulo: "Amounts in products", datos: "$645.765", imagen: "fa-dollar-sign" },
        { titulo: "Users Quantity", datos: "90", imagen: "fa-user" }
    ];

    return (

        <section className="top-data">
        {fichasData.map((elm) => (
            <Ficha
                
                titulo={elm.titulo}
                datos={elm.datos}
                imagen={elm.imagen}

            />
        ))}
    </section>
    )
}

export default Fichas
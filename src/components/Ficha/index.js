import React from "react";

function Ficha(props){

return(
    <article className="data-detail">
                <div class="card-content">
                    <h4>{`${props.titulo}`}</h4>
                    <p>{`${props.datos}`}</p>
                </div>
                <i className={`fas ${props.imagen} fa-2x text-gray-300`}></i> 
            </article>
)

}

export default Ficha
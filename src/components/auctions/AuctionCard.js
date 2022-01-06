import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuctionCard = ({ item }) => {

  const { currentUser } = useContext(AuthContext);

const hora = new Date(item.duration).toLocaleTimeString("es-CL")

let date = new Date(item.duration).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 

  return (
    <div className="col">
        {currentUser && (
      <div className="card shadow-sm">
       
        <div className="card-body p-4 py-2">

          <div className="border border-success row">
            <span className="bg-success p-1 col-md-3">
              <span className="text-white px-2"> {item.categorie} </span>
            </span>
         
            <span className="p-1 col-md-2">
              <span className="text-secondary ">KL </span> {item.taxista}
            </span> 

            <span className=" p-1 col-md-2">
              <span className="text-secondary ">Unidad </span> {item.unidad}
            </span> 

            <span className="col-md-3 p-1">
              <span>{date}, {hora.slice(0, -3)}</span>
            </span>

            <span className=" col-md-2 p-1">
              <span className="text-secondary ">Costo</span> {item.costo}
            </span> 
          </div>
          <div>
              <span className="text-secondary">Encargado</span> {item.email.slice(0, -10)}
            </div>

            <div>
              <span className="text-secondary">Descripción</span> {item.desc}
            </div>

            <div>
              <span className="text-secondary">Comentarios</span> {item?.coments}
            </div>

        </div>
      
      </div>
        )}
    </div>
  );
};

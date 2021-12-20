import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export const AuctionCard = ({ item, handleState}) => {
  const { currentUser, bidAuction } = useContext(AuthContext);

  const { docs } = useFirestore("auctions");

  let seconds 
  let completed;
  let acuerdo;

  docs.map((el) => {
    el.id === item.id && (seconds = el.duration);
    el.id === item.id && (completed = el.completed);
    el.id === item.id && (acuerdo = el.acuerdo);
  });


const hora = new Date(seconds).toLocaleTimeString("es-CL")

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 

const handlerButton =()=>{
    bidAuction(item.id)
    handleState(item)
}

const handlerInfo =()=>{
  handleState(item)
  window.scrollTo(0,document.body.scrollHeight, {behavior: 'smooth'})
}

  return (
    <div className="col">
        {currentUser && (
      <div className="card shadow-sm">
      {/*   <div
          onClick={handlerInfo}
          style={{
            height: "180px",
            backgroundImage: `url(${item.imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="w-100 mt-4"
        /> */}
       
        <div className="card-body p-4">

          <div className="border d-flex border-success justify-content-between">
            <span className="mr-5 bg-success p-1">
              <span className="text-white px-2">
                Categoria {item.categorie.charAt(0).toUpperCase() + item.categorie.slice(1)} 
              </span>
            </span>
         
            <span className="mx-5 p-1">
              <span className="text-secondary ">KL </span> {item.title3}
            </span> 

            <span className="mx-5 p-1">
              <span className="text-secondary ">Unidad </span> {item.title}
            </span> 

            <span className="mx-5 p-1">
              <span>{date}, {hora.slice(0, -3)}</span>
            </span>

            <span className="mx-5 p-1">
              <span className="text-secondary ">Costo Total</span> {item.title2}
            </span> 
          </div>

            <div>
              <span className="text-secondary ">Algo: </span> {item.title1}
            </div>

            <div>
              <span className="text-secondary ">Comentarios: </span> {item?.description}
            </div>

          
     {/*      <div className="d-flex justify-content-between align-item-center">
           
              <Button className={completed ? "btn btn-primary w-100" 
                                           : acuerdo 
                                           ? "btn btn-success w-100" 
                                           : "btn btn-danger w-100"}
                      onClick={handlerButton}>

                {completed ? "Completado" : acuerdo ? 'Sin Completar ✓' : 'Sin Completar ✘'}
              </Button>
          
          </div> */}
        </div>
      
      </div>
        )}
    </div>
  );
};

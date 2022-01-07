import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuctionCard } from "./AuctionCard";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useFirestore } from '../../hooks/useFirestore';

import "./picker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

export const AuctionBody = () => {
  const { currentUser, globalMsg } = useContext(AuthContext);

  const { docs } = useFirestore('auctions');
  let DB = docs

  const [year, setYear]=useState()


  const handlerYear = (e) =>{
    setYear(e.target.value)
  }

  const handler = (e) =>{
    e.preventDefault()

    
  }

  let u = DB.filter(el => el.unidad === year)
  console.log(u)

  let total = u.reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)

  let mantenim = u.filter(el => el.categorie === 'Mantenimiento')
                 .reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)

  let rep = u.filter(el => el.categorie === 'Reparacion')
              .reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)

  let choq = u.filter(el => el.categorie === 'Choque')
                .reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)

  let llant = u.filter(el => el.categorie === 'Llantas')
                .reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)

  /* ===================================== filter Date ==================== */


  const [today2, setToday2] = useState();

  const [fecha, setFecha] = useState();
  const [arr, setArr] = useState([]);

  let l = arr.filter((el) => el).length;

  const onDate = (fecha) => {
    setFecha(fecha);

    let today = fecha?.getTime();
    let tomorrow = today + 86400000;

    let today2 = new Date(today).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });

    setToday2(today2);

    let ss = DB;

    let a = ss.map((el, i) => {
      if (el.duration > today && el.duration < tomorrow) {
        return el;
      }
    });
    setArr(a);
  };

  /* ===================================== filter Date END==================== */

  /* ===================================== filter Mail ==================== */

  const [mail, setMail] = useState();

  const handleMail = (e) => {
    setMail(e.target.value);
    setArrRadio([]);
  };

  const [arr2, setArr2] = useState([]);

  const [n, setN] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr2(mail);

    let sss = arr
      .filter((el) => el !== undefined)
      .map((el) => el.unidad === mail && el);

    setN(sss);
  };

  /* ===================================== filter Mail END==================== */

  /* ===================================== Radio Filter ==================== */
  

  const [arrRadio, setArrRadio] = useState([]);

  /* ===================================== Radio Filter END ==================== */

  /* ===================================== Clientes Filter ==================== */

  let db = n?.sort((o1, o2) => o2.duration - o1.duration) //last to near
   

  const [mantenimiento, setmantenimiento] = useState(true);
  const [reparacion, setreparacion] = useState(true);
  const [choque, setchoque] = useState(true);
  const [llantas, setllantas] = useState(true);
  /* const [externo, setexterno] = useState(true); */

  const handlemantenimiento = (e) => {
    setmantenimiento(!mantenimiento);
    mantenimiento
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handlereparacion = (e) => {
    setreparacion(!reparacion);
    reparacion
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handleChoque = (e) => {
    setchoque(!choque);
    choque
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

  const handlellantas = (e) => {
    setllantas(!llantas);
    llantas
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  };

/*   const handleExterno = (e) => {
    setexterno(!externo);
    externo
      ? setArrFilter([...arrFilter, e.target.value])
      : removeItemFromArr(arrFilter, e.target.value);
  }; */

  const [arrFilter, setArrFilter] = useState([]);

  function removeItemFromArr(arrFilter, item) {
    let index = arrFilter.indexOf(item);
    if (index > -1) {
      arrFilter.splice(index, 1);
    }
  }

  useEffect(() => {
    for (let index = 0; index < arrFilter.length; index++) {
      const element = db.filter((el) => el.categorie !== arrFilter[index]);
      db = element;
    }
    setArrRadio(db);
  }, [arrFilter, mantenimiento, reparacion, choque, llantas/* , externo */]);

  /* ===================================== Clientes Filter END ==================== */


  let arr3 = arr;

  if (n) {
    let nn = n.filter((el) => el !== false);
    arr3 = nn;
    if (arrRadio.length > 0) {
      arr3 = arrRadio.filter((el) => el !== false);
    }
  } 

  let arr4 = [];

  if (arr.length > 0) {
    arr4 = arr3;
  }

 


  return (
    <div className="container-fluid ">

      <div
        style={{ zIndex: "9999999" }}
        className="text-center w-50 position-fixed top-10 start-50 translate-middle"
      >
        {globalMsg && <Alert variant="danger">{globalMsg}</Alert>}
      </div>
      {currentUser && (
        <div className="row bg-secondary pt-4 ">

          <div className={arr.length > 0 ? "text-white bg-primary mb-3 p-1 row" : 'd-none'}>

            <span style={{ marginLeft: "20px" }} className="col-md-4">
              <span className="p-1">{l}</span> Trabajos el Dia : {today2}
            </span>


            <span
              style={{ marginLeft: "50px" }}
              className={n?.length > 0 ? "col-md-3" : "d-none"}
            >
              <span className="bg-dark p-1">
               $ {n?.filter((el) => el !== false).reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)}
              </span>{" "}
              En taller para la unidad {mail}
            </span>

            <span
              style={{ marginLeft: "50px" }}
              className={arrRadio?.length > 0 ? "col-md-3" : "d-none"}
            >
              <span className="bg-dark p-1">
               $ {arrRadio?.filter((el) => el !== false).reduce((acc, curr) => acc + curr?.costo, 0).toFixed(2)}
              </span>{" "}
              En servicios Mostrados
            </span>
            
          </div> 


          <div className="col-1"></div>
          <div
            className={n?.length > 0 ? "d-none" : "col-md-3 text-center mb-4 me-5"}
          >
            <DatePicker
              selected={fecha}
              onChange={onDate}
              locale="es"
              className="pickers mb-3 form-control mt-2 w-100 bg-secondary"
              dateFormat="dd 'de' MMMM 'de' yyyy"
            />
          </div>
          <div
            className={arr?.length > 0 ? "col-md-1 fs-2 row-back" : "d-none"}
            onClick={() => location.reload()}
          >
            🔙
          </div>

          <div className="col-md-3 mb-4 text-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleMail}
                value={mail}
                className={
                  arr.length > 0 ? "w-100 form-control mt-2" : "d-none"
                }
                style={{ width: "0" }}
                placeholder="Buscar por Unidad"
              />
            </form>
          </div>
          <div className="col-1"></div>

          {/* -=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
          <div className={n?.length > 0 ? "col-md-3 mb-3 " : "d-none"}>
            <div className="w-100 mt-0">
              <label className="text-white mb-3 mx-4">
                <input
                  type="checkbox"
                  className="m-1"
                  value="Mantenimiento"
                  onChange={(e) => handlemantenimiento(e)}
                  checked={mantenimiento}
                />
                Mantenimiento
              </label>

              <label className="text-white mb-3">
                <input
                  type="checkbox"
                  className="m-1"
                  value="Reparacion"
                  onChange={(e) => handlereparacion(e)}
                  checked={reparacion}
                />
                Reparacion
              </label>
<br/>
              <label className="text-white mx-4">
                <input
                  type="checkbox"
                  className="m-1"
                  value="Choque"
                  onChange={(e) => handleChoque(e)}
                  checked={choque}
                />
                Choque
              </label>


              <label className="text-white mx-4">
                <input
                  type="checkbox"
                  className="m-1"
                  value="Llantas"
                  onChange={(e) => handlellantas(e)}
                  checked={llantas}
                />
                LLantas
              </label>

           {/*    <label className="text-white">
                <input
                  type="checkbox"
                  className="m-1"
                  value="clienteExterno"
                  onChange={(e) => handleExterno(e)}
                  checked={externo}
                />
                Cliente Externo
              </label> */}
            </div>

            
          </div>
          
            
          
        </div>
      )}

      <form className="row" onSubmit={handler} >
        <input type="text" className="w-100" onChange={handlerYear} />
      </form>

      <div style={{backgroundColor:'rgba(111,222,190, .3)' }} className={u.length > 0 ? 'mt-2 px-3 pt-2 pb-1' : 'd-none'} >
        <p>Mantenimientos ${mantenim}</p>
        <p>Reparaciones ${rep}</p>
        <p>Choques ${choq}</p>
        <p>Llantas ${llant}</p>
        <br/>
        <p>Total <span className="bg-dark text-white p-1">{total}</span> Por Todo el Año 2022</p>
      </div>           

      {DB && (
        <div className="row row-cols-1 p-5 g-3 border mt-1 ">
          {arr4
            .filter((el) => el !== undefined)
            .map((doc) => {
              return (
                <AuctionCard item={doc} key={doc.id} />
              );
            })}
        </div>
      )}

    </div>
  );
};

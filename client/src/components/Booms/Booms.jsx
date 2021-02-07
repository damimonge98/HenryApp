import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooms, getBoomsTweet } from "../../redux/actions/boomsActions.js";
import Carousel from 'react-elastic-carousel';
import "./Booms.css";
import axios from "axios";




export default function Booms() {
  const dispatch = useDispatch();
  const booms = useSelector((state) => state.boom.booms);
  const [state, setState] = useState([]);

 

  useEffect(() => {
    dispatch(getBooms());
    dispatch(getBoomsTweet());
  }, []);
  useEffect(() => {
    setState(booms);
  }, [booms]);

  if (state.length !== 0) {
    for (var i = 0; i < state.length; i++) {
      const arreglo = state[i].info.split(" ");
      const link = arreglo.filter(el => el.includes("http"));
      booms[i].info = booms[i].info.replace(link[0], "");
    }
  }

 



  return (
    <div className="containerDiv">
      <div>
        <h1 className="containerTitle">¡ESTO SUCEDE EN TIEMPO REAL CON NUESTROS GRADUADOS!</h1>
      </div>


      <div className="containerCarousel">
        <Carousel style={{ backgroundColor: 'yellow', color: 'black' }}>
          {booms.length !== 0 ?
            booms.map((el, i) =>
              <Fragment key={i}>
                <div className="containerBoom">
                  <p>{el.info}</p>
                  <a href={el.link} className="link">Leer más...</a>
                </div>
              </Fragment>
            ) : <h1>Loading...</h1>}
        </Carousel>
      </div>
    </div> 
  );


}

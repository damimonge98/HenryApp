import React from "react";
import {useEffect, useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBooms, getBoomsTweet} from "../../redux/actions/boomsActions.js";
import Carousel from 'react-elastic-carousel'
import styles from "./Booms.css";


export default function Booms () {
    const dispatch = useDispatch()
    const booms = useSelector ((state)=> state.boom.booms)
    const [state, setState] = useState([])
    const [link, setLink] = useState(null)

    useEffect (()=> {
        dispatch(getBooms())
        dispatch(getBoomsTweet())   
    },[])
    useEffect (()=> {
        setState(booms)
    }, [booms])

    if (state.length !==0) {
        for (var i = 0; i < state.length; i ++) {
            const arreglo = state[i].info.split(" ")
            const link = arreglo.filter(el => el.includes("http"))
            booms[i].info = booms[i].info.replace(link[0], "")
        }
    }

    
    console.log(booms)
    console.log(state)
    console.log(link)
return (
    <div className = {styles.containerDiv}>
        <h1 className = {styles.title}>MIRÁ LOS ULTIMOS BOOMS ;)</h1>
        <Carousel>
            {booms.length !== 0? 
            booms.map(el => 
            
            <Fragment>
            <div>{el.info}</div>
            <div>
            <a href={el.link} className ={styles.a}>VER MÁS</a>
            </div>
            </Fragment>
                ) : <h1>Loading...</h1>}
        </Carousel>
            )
    </div>
)
      

}


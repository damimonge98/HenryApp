import React from "react";
import {useEffect, useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBooms, getBoomsTweet} from "../redux/actions/boomsActions.js"


export default function BoomTest () {
    const dispatch = useDispatch()
    const booms = useSelector ((state)=> state.boom.booms)
    const [state, setState] = useState(0)

    useEffect (()=> {
        dispatch(getBooms())
        dispatch(getBoomsTweet())   
    },[])
    useEffect (()=> {
        
    }, [booms])

    
    
        
    console.log(booms)


return (<div> 
   {booms.length === 0 ? <h1>Aca deberia ir un spinner de Loading :P</h1> :
   <Fragment>
   <h2>{booms[0].info}</h2>
   <h2>{booms[1].info}</h2>
   <h2>{booms[2].info}</h2>
   <h2>{booms[3].info}</h2>
   </Fragment>
   }

    </div>)
}


import axios from "axios";
import {GET_BOOMS, GET_BOOM_TWEETS} from "../constants/boomsContants"

export function getBooms () {
    return async function (dispatch) {
        try {
            const b = await axios.get ("http://localhost:5000/boom/") 
        }
        catch (err) {
            console.log(err)
        }
        
    }
}

export function getBoomsTweet () {
    return async function (dispatch) {
        try {
            const res = await axios.get ("http://localhost:5000/boomTweets/")
            dispatch (getTweets(res.data))
        }
        catch (err) {
            console.log(err)
        }

        
        
        
    }
}

const getTweets = (res) => ({
    type: GET_BOOM_TWEETS,
    payload: res

})
import axios from "../../configAxios";
import {GET_BOOMS, GET_BOOM_TWEETS} from "../constants/boomsContants"

export function getBooms () {
    return async function (dispatch) {
        try {
            const b = await axios.get ("/boom/") 
        }
        catch (err) {
            console.log(err)
        }
        
    }
}

export function getBoomsTweet () {
    return async function (dispatch) {
        try {
            const res = await axios.get ("/boomTweets/")
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
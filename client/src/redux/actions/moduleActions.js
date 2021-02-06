import axios from "axios";
import { GET_MODULE } from "../constants/moduleContants"

const dispatchModule = (res) => ({
    type: GET_MODULE,
    payload: res.data
})

export const  getModule = (id) => {
    return async (dispatch) => {
          const res = await axios.get('http://localhost:5000/modules/'+ id);
    
          dispatch(dispatchModule(res.data))
          console.log(res.data)
      };
}
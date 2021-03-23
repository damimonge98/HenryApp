import axios from "../../configAxios";
import dotenv from "dotenv";
dotenv.config();

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API
})

export default clienteAxios;
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const clienteAxios = axios.create({
    baseURL: ""
})

export default clienteAxios;
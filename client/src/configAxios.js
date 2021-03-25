import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const clienteAxios = axios.create({
    baseURL: "https://henry-app21.herokuapp.com"
})

export default clienteAxios;
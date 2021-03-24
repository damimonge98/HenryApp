import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const clienteAxios = axios.create({
    baseURL: "https://henry-app-sage.vercel.app/auth/register"
})

export default clienteAxios;
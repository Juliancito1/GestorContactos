import axios from "axios"

export const contactoAPI = axios.create({
  baseURL: "http://localhost:3000"
})
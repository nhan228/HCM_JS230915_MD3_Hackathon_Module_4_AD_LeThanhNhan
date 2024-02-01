import axios from "axios"
import { createCategory } from "../../../common/interface"


export const categoryApi = {
    create: async (data: createCategory) => {
        return await axios.post(`${import.meta.env.VITE_SV_API_URL}/categories`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/categories`)
    },
    findById: async (categoryId:number) => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/categories/${categoryId}`)
    },
}
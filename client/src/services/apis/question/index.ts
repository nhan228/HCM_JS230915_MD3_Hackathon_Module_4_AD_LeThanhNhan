import axios from "axios"
import { createQuestion } from "../../../common/interface"

export const questionApi = {
    create: async (data: createQuestion) => {
        return await axios.post(`${import.meta.env.VITE_SV_API_URL}/questions`, data)
    },
    findAll: async () => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/questions`)
    },
    findById: async (questionId: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/questions/${questionId}`)
    },
    findWithAnswer: async (questionId: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/questions/${questionId}/answer`)
    },
    findWithCondition: async (categoryId: number, level: number, limit: number) => {
        return await axios.get(`${import.meta.env.VITE_SV_API_URL}/questions?category=${categoryId}&level=${level}&limit=${limit}`)
    }
}
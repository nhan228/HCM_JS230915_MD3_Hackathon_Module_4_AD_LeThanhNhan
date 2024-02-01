import express from "express"
const Router = express.Router()

import categoriesApi from './apis/categories.api'
Router.use("/categories", categoriesApi)

import questionApi from './apis/question.api'
Router.use("/questions", questionApi)

export default Router
import { categoryController } from '../../../controllers/category.controller'

import express from "express"
const Router = express.Router()

Router.post("/", categoryController.create)
Router.get("/", categoryController.findAll)
Router.get("/:id", categoryController.findById)

export default Router
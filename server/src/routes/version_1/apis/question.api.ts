import { questionController } from '../../../controllers/question.controller'

import express from 'express'
const Router = express.Router()

Router.post('/', questionController.create)
Router.get('/', questionController.findAll)
Router.get('/:id', questionController.findById)
Router.get('/:id/answer', questionController.findWithAnswer)
Router.get('/', questionController.findWithCondition)

export default Router;
import { questionController } from '../../../controllers/question.controller'

import express from 'express'
const Router = express.Router()

Router.post('/', questionController.create)
Router.get('/', questionController.findWithCondition)
Router.get('/', questionController.findAll)
Router.get('/:id', questionController.findById)
Router.get('/:id/answer', questionController.findWithAnswer)

export default Router;
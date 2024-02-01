import { Request, Response } from 'express'
import { categoryModel } from '../models/category.model'

export const categoryController = {
  create: async (req: Request, res: Response) => {
    try {
      const { status, data, message } = await categoryModel.create(req.body)
      if (status) {
        return res.status(200).json({
          message,
          data
        })
      } else {
        throw {
          message
        }
      }
    } catch (err) {
      return res.status(500).json({
        message: (err as Error).message || 'Server baỏ trì'
      })
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {
      const { data, message, status } = await categoryModel.findAll()
      if (status) {
        return res.status(200).json({
          message,
          data
        })
      } else {
        throw {
          message
        }
      }
    } catch (err) {
      return res.status(500).json({
        message: (err as Error).message || 'Server baỏ trì'
      })
    }
  },

  findById: async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.id)
      const { data, message, status } = await categoryModel.findById(categoryId)
      if (status) {
        return res.status(200).json({
          message,
          data
        })
      } else {
        throw {
          message: message
        }
      }
    } catch (err) {
      console.log('err', err)
      return res.status(500).json({
        message: (err as Error).message || 'Server baỏ trì'
      })
    }
  },
}
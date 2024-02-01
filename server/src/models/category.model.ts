import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const categoryModel = {
    create: async (categoryData: any) => {
        try {
            const createdCategory = await prisma.category.create({
                data: categoryData,
            })

            return {
                status: true,
                data: createdCategory,
                message: 'Tạo category thành công'
            }
        } catch (err) {
            return {
                status: false,
                message: (err as Error).message || 'Tạo category thất bại'
            }
        }
    },

    findAll: async () => {
        try {
            const categories = await prisma.category.findMany()
            return {
                status: true,
                data: categories,
                message: 'Lấy dữ liệu categories thành công'
            }
        } catch (err) {
            return {
                status: false,
                message: (err as Error).message || 'Không tìm thấy đường dẫn đến categories'
            }
        }
    },

    findById: async (categoryId: number) => {
        try {
            const category = await prisma.category.findUnique({
                where: { id: categoryId }
            })

            if (category) {
                return {
                    status: true,
                    data: category,
                    message: 'Lấy dữ liệu category thành công'
                }
            } else {
                return {
                    status: false,
                    message: 'Lấy dữ liệu category thất bại'
                }
            }
        } catch (err) {
            return {
                status: false,
                message: (err as Error).message || 'Không tìm thấy category',
            }
        }
    }
}
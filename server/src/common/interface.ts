interface Category {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    questions?: Question[]
}

interface Question {
    id: number
    content: string
    level: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    answers?: Answer[]
    category?: Category
}
interface createCategory {
    name: string
}
interface createQuestion {
    categoryId: number,
    content: string,
    level: number
}

interface Answer {
    id: number
    content: string
    isCorrect: boolean
    questionId: number
    createdAt: Date
    updatedAt: Date
    question?: Question
}

export { Category,createCategory, Question, createQuestion, Answer }

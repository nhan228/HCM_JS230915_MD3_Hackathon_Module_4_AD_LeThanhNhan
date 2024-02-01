interface category {
    id: number,
    name: string,
}

interface createCategory {
    name: string
}

interface question {
    id: number,
    name: string,
    createdAt: Date,
    content: string,
    level: number,
    categoryId: number,
    answers: answer[]
}

interface createQuestion {
    categoryId: number,
    content: string,
    level: number
}

interface answer {
    id: number,
    isCorrect: boolean,
    content: string,
    createdAt: Date,
    questionId: number
}

export type { category, question, answer, createCategory, createQuestion }

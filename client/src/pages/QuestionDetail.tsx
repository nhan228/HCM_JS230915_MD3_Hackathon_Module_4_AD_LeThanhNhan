import { useState } from 'react'
import { question } from '../common/interface'
import { useSelector } from 'react-redux'
import { Store } from '@/store'

import './questionDetail.scss'

export default function QuestionDetail() {
  const questionStore = useSelector((store: Store) => store.questionStore)
  let question: question[] = []
  if (questionStore.data) {
    question = questionStore.data
  }
  const [questionId, setQuestionId] = useState<number | null>(question[0]?.id)
  const [step, setStep] = useState(1)
  const [sumOfCorrectAnswer, setSumOfCorrectAnswer] = useState(0)
  const [display, setDisplay] = useState(false)

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setSumOfCorrectAnswer(sumOfCorrectAnswer + 1)
    }
    setStep(step + 1)
    if (step <= question?.length - 1) {
      setQuestionId(question[step]?.id)

    } else {
      setQuestionId(null)
    }
    if (step == question?.length) {
      setDisplay(true)
    }
  }
  return (
    <>
      <div className='container'>
        {
          question?.map((item) => (
            <div className='box' key={Date.now() * Math.random()}>
              {
                questionId == item?.id && (
                  <>
                    <span>{`Correct Answer:${sumOfCorrectAnswer}/${step - 1}`}</span>
                    <p>{item?.content}</p>
                    {
                      item?.answers?.map(answer => {
                        return (
                          <div className='answer' key={Date.now() * Math.random()}>
                            <button onClick={() => {
                              handleAnswer(answer?.isCorrect)
                            }}>{answer?.content}</button>
                          </div>
                        )
                      })
                    }
                    <button className='next' onClick={() => {
                      handleAnswer(false)
                    }}>Next question</button>
                  </>
                )
              }
            </div>
          ))}

        {
          display && (
            <>
              <div className='popUp-box'>
                <div className='popUp-content'>
                  <h2>Congrats</h2>
                  <p>{`You answered: ${(sumOfCorrectAnswer * 100 / question?.length).toFixed(0)}%`} </p>
                  <button
                    onClick={() => {
                      window.location.href = '/'
                    }}
                  >Play Again</button>
                </div>
              </div>
            </>
          )}
      </div>

    </>
  )
}

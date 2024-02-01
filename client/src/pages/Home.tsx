import React, { useEffect, useState } from 'react'
import { category } from '../common/interface'
import { api } from '@services/apis'
import { useNavigate } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { questionAction } from '../store/slice/question.slice'

import './home.scss'

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [category, setCategory] = useState<category[]>([])
    let [display, setDisplay] = useState(true)

    const handleGetQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const selectedCategoryId = Number((e.target as any).category.value)
        const selectedDifficulty = Number((e.target as any).level.value)
        const selectedLimit = Number((e.target as any).limit.value)

        try {
            let result = await api.question.findWithCondition(selectedCategoryId, selectedDifficulty, selectedLimit)
            if (result.status == 200) {
                dispatch(questionAction.setData(result.data.data))
                setDisplay(false)
                navigate('/question-detail')
            }
        } catch (err) {
            console.log('lỗ',err);           
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                let result: any = await api.category.findAll();
                if (result.status == 200) {
                    setCategory(result.data.data)
                }
            } catch (err) {
                console.log('err', err);
            }
        }
        getData()
    }, [])

    return (
        <div className='home-box'>
            {
                display && (
                    <div className='home-container'>
                        <h2>Setup Quiz</h2>
                        <form onSubmit={(e) => {
                            handleGetQuestion(e)
                        }}>
                            <p>Number Of Question</p>
                            <input type='number' min='1' defaultValue={1} name='limit'></input>
                            <p>Category</p>
                            <select id="category" defaultValue={category[0]?.id}>
                                {category?.map(item => (
                                    <option key={Date.now() * Math.random()} value={item?.id}>{item?.name}</option>
                                ))}
                            </select>
                            <p>Difficulty</p>
                            <select id="level" defaultValue={1}>
                                <option value="1">easy</option>
                                <option value="2">medium</option>
                                <option value="3">difficult</option>
                            </select>
                            <button type='submit'>Start</button>
                        </form>
                    </div>
                )
            }
            <Outlet />
        </div>
    )
}

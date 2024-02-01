
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import QuestionDetail from '../pages/QuestionDetail.tsx'

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='question-detail' element={<QuestionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
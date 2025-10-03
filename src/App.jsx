import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/quiz' element={<QuizPage />} />
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  )
}

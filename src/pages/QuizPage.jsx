import React, { useState } from 'react'
import Layout from '../components/Layout'
import q1 from '../assets/images/quiz-1.png'
import q2 from '../assets/images/quiz-2.png'
import q3 from '../assets/images/quiz-3.png'
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const questions = [
    { img: q1, options: ["2주년", "20주년"]},
    { img: q2, options: ["공주", "꼬질"]},
    { img: q3, options: ["좋아해", "사랑해"]}
  ]

  const handleAnswer = () => {
    if(step< questions.length-1) {
      setStep(step+1);
    } else {
      navigate('/result');
    }
  }
  
  return (
    <Layout>
      <div className='relative w-full h-screen'>
        {/* 문제 */}
        <img
          src={questions[step].img}
          alt={`문제 ${step+1}`}
          className='w-full h-screen object-cover'
        />
        {/* 버튼 */}
        <div className="absolute bottom-10 left-0 w-full px-6 space-y-4">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={handleAnswer}
            className="w-full py-4 bg-white rounded-2xl text-xl font-bold border-4 shadow"
          >
            {opt}
          </button>
        ))}
        </div>
      </div>
    </Layout>
  )
}

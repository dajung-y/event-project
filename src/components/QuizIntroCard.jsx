import Lottie from 'lottie-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import animationData from './../assets/animations/surprisebox.json'
export default function QuizIntroCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  }

  return (
    <div className='w-full rounded-lg bg-white'>
      <div className='m-4 px-4 py-8'>
        <div className='flex flex-col items-center'>
          {/* 이미지 들어가기 */}
          <div className='flex justify-center w-full'>
            <Lottie
              animationData={animationData}
              style={{width: 300, height:300}}
            />
          </div>
          <h1 className='my-2 text-2xl font-bold'>럭키박스 이벤트</h1>
          <p>단 하루만 진행되는 특별한 기회!</p>
          <p>간단한 퀴즈로 100% 선물 받아가세요</p>
        </div>
        <div className='mt-8'>
          <button className='w-full py-2 rounded-2xl bg-black text-white text-center'
                  onClick={handleClick}>
            퀴즈 풀러가기
          </button>
        </div>
      </div>
    </div>
  )
}

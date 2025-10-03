import React from 'react'
import Layout from '../components/Layout';
import mainImg from '../assets/images/poster.png';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='relative w-full h-screen'>
        <img  
          src={mainImg}
          alt='메인 이미지'
          className='w-full h-screen'
        />
        <div className='absolute bottom-10 left-0 w-full px-6'>
          <button
            onClick={() => navigate('/quiz')}
            className='w-full px-6 py-4 border-4 bg-white rounded-3xl text-2xl font-bold cursor-pointer'>
            퀴즈 풀러가기
          </button>
        </div>
      </div>
    </Layout>
  )
}

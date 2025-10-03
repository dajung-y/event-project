import React, { useEffect, useState } from 'react'
import Loading from '../components/results/Loading'
import Layout from '../components/Layout';
import result from '../assets/images/result.png';

export default function ResultPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  },[]);
  return (
    <Layout>
      {isLoading ? <Loading/> : (
        <div className='w-full h-screen'>
          <img  
            src={result}
            alt='결과 이미지'
            className='w-full h-screen object-cover'
        />
        </div>   
      )}
    </Layout>
  )
}

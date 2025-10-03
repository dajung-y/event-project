import React from 'react';
import img from '../../assets/images/loading.png'
export default function Loading() {
  return (
    <div className='w-full h-screen'>
      <img
        src={img}
        alt='로딩 이미지'
        className='w-full h-screen object-cover'
        />
    </div>
  );
}

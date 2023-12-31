'use client'

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

  }, []);

  return (
    <>
      {isLoading ? (
        <p className="justify-center items-center h-full w-full">Loading...</p>
      ) : (
        <>
        <Spline scene="https://prod.spline.design/Q8ogpFmZ3LL-DlZO/scene.splinecode" />
        </>
      )}
    </>
  );
}

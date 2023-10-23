'use client'

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Forest() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

  }, []);

  return (
    <>
      {isLoading ? (
        <p className="justify-center items-center">Loading...</p>
      ) : (
        <Spline scene="https://prod.spline.design/ltehhOqzYtFfdCxw/scene.splinecode" />
      )}
    </>
  );
}

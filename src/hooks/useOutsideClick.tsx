'use client';
import { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick as any);

    return () => {
      document.removeEventListener('click', handleClick as any);
    };
  });
};

export default useOutsideClick;

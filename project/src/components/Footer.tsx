import React, { ReactElement } from 'react';

export default function Footer():ReactElement {
  return (
    <footer className='h-[100px] flex items-center justify-center border-t-2 border-t-red-500 mt-8'>
      <span className='font-bold text-gray-200'>Pedro A Veber Berna - &copy; 2023</span>
    </footer>
  );
}
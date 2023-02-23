import React, { ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import files from '../db/files.json';
import uuid from 'react-uuid';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

import Files from './Files';

export default function File():ReactElement {
  const { id } = useParams();
  const file = files.find(item => String(item.id) === String(id));

  if (!file) {
    return <Files />
  }

  return (
    <>
    <section className='w-full bg-gray-200 dark:bg-zinc-700 px-4 py-2 rounded-lg border-2 border-zinc-900 dark:border-gray-200'>
      <h2 className='text-2xl font-bold mb-2 dark:text-gray-200'>{ file!.title }</h2>
      {file!.subtitle !== null && <span className=' text-sm italic text-zinc-900 dark:text-gray-200 mb-4 block'>#{file!.subtitle}</span>}
      {file!.content.map(item => <p key={uuid()} className={'text-lg mb-3 text-zinc-900 dark:text-gray-200 leading-6'}>{ item }</p>)}
      {file!.signature !==  null && <p className='text-lg text-zinc-900 dark:text-gray-200 text-end mt-8'>- { file!.signature }</p>}
    </section>
    <Link to={'/'} className={'flex items-center mt-4 px-2 py-1 w-1/2 sm:w-1/3 duration-150 bg-gray-300 rounded-lg hover:bg-gray-400'}>
      <ArrowUturnLeftIcon className='w-[30px] text-zinc-900 mr-2'/> Back to all files
    </Link>
    </>
  );
}
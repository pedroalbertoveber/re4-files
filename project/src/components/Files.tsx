import React, { ReactElement } from "react";
import { Link } from 'react-router-dom';
import allfiles from '../db/files.json';

export default function Files():ReactElement {

  const files = allfiles;

  const areas = [
    "General",
    "Village",
    "Castle"
  ];

  return(
    <div className="w-full">
      { areas.map(area => (
        <div key={area} className={'w-full '}>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-200 border-b-2 border-b-zinc-900 dark:border-b-gray-200 py-4 mb-8">{area}</h2>
          <div className="w-full flex flex-col items-center gap-2 mb-4 sm:flex-row sm:flex-wrap sm:gap-0 sm:justify-between">
            {files.map(item => (
              item.location === area && 
              <Link to={`/${item.id}`} key={item.id} className={'flex items-center justify-center duration-150 bg-gray-300 hover:bg-gray-400 w-full sm:w-[49.5%] sm:mb-4 rounded-lg py-4 border-2 border-zinc-900 shadow-sm dark:bg-gray-600 hover:dark:bg-gray-700 dark:border-gray-200'}>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-gray-200">{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
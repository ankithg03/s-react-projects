import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ name, desc, link, imageSrc, tech }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link className="item" to={link}>
        <img className="rounded-t-lg" src={imageSrc} alt="" />
      </Link>
      <div className="p-5">
        <Link className="item" to={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 rounded-lg">{desc}</p>
        <p className="mb-3 font-light	text-sm text-gray-400 dark:text-gray-400 rounded-lg italic">{tech}</p>
        <Link to={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none card-btn">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;

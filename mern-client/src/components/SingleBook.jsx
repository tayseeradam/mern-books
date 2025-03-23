import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, URL, authorName, bookDescription } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={URL} alt={bookTitle} className='h-96 mx-auto' />
      <h2 className='text-4xl font-bold mt-8 font-serif'>{bookTitle}</h2>
      <h3 className='text-2xl font-semibold mt-4 font-serif'>by {authorName}</h3>
      <p className='mt-4 text-lg font-serif'>{bookDescription}</p>
      <button className='bg-sky-700 font-semibold text-white py-2 px-4 rounded mt-8 font-serif'>Buy Now</button>
    </div>
  );
};

export default SingleBook;
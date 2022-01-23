import React, { useState } from 'react';

const ImageSearch = ({searchText}) => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchText(text)

  }

  return <div className='mb-12 mt-4  flex items-center justify-center'>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" className='border rounded-md border-blue-500 outline-none px-10 py-3' placeholder='Search image...'/>
      <button type="submit" className="bg-blue-500 px-5 py-3 rounded text-base text-white ml-10">Search</button>
    </form>
  </div>;
};

export default ImageSearch;

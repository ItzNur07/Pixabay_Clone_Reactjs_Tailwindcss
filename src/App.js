import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './Components/ImageCard';
import ImageSearch from './Components/ImageSearch';

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
  },[term])

  return (
    <>
    <ImageSearch searchText={(text) => setTerm(text)} />
    <div className="container mx-auto">
      {!isLoading && images.length === 0 && <p className="text-5xl text-center mt-40 text-orange-700">Not Images Found</p>}
     {isLoading ? <p className="text-5xl text-center mt-40 text-orange-700">Loading...</p> : <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
    </>
  );
}

export default App;

import React from 'react';

const ImageCard = ({image}) => {
  const tags = image.tags.split(',');
  const {user, downloads, views, likes, webformatURL} = image;
  return (
    <div className="max-w-sm rounded overflow-hidden cursor-pointer shadow-lg">
    <img src={webformatURL} alt="" className="w-full transform duration-100 hover:scale-110" />
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-lx">
        Phoho by {user}
      </div>
      <ul>
        <li><strong>Views: </strong>{views}</li>
        <li><strong>Downloads:</strong>{downloads}</li>
        <li><strong>Likes:</strong>{likes}</li>
      </ul>
    </div>
    <div className="px-6 py-4">
    {tags.map((t , i) => (
      <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {`# ${t}`}
    </span>
    ))}
  </div>
  </div>
  )
};

export default ImageCard;

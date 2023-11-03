import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from your API (replace with your API endpoint)
    axios.get('your-api-url').then((response) => {
      setImages(response.data.slice(0, 20)); // Limit to 20 images
    });
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image) => (
          <Link to={`/image/${image.id}`} key={image.id}>
            <div className="image-thumbnail">
              <img src={image.thumbnailUrl} alt={image.title} />
              <p>{image.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

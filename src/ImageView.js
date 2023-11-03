import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ImageView = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch the single image by ID from your API (replace with your API endpoint)
    axios.get(`your-api-url/${id}`).then((response) => {
      setImage(response.data);
    });
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.url} alt={image.title} />
      <p>{image.description}</p>
      <Link to="/">Back to Gallery</Link>
    </div>
  );
};

export default ImageView;

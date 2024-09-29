import React, { useState, useEffect } from 'react';
import './index.css'

const Feed = () => {
  const [images, setImages] = useState([]);
  const [unsavedImages, setUnsavedImages] = useState([]);

  // Load images from localStorage when the component mounts
  useEffect(() => {
    const storedImages = localStorage.getItem('uploadedImages');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUnsavedImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImages = () => {
    const allImages = [...images, ...unsavedImages];
    setImages(allImages);
    localStorage.setItem('uploadedImages', JSON.stringify(allImages));
    setUnsavedImages([]);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
  };

  return (
    <div className='user-feed-container'>
      <h2 className='feed-heading'>Your Feed</h2>
      <input type="file" accept="image/*" className='feed-image-input' onChange={handleImageChange} />
      {unsavedImages.length > 0 && (
        <button onClick={handleSaveImages} className='feed-save-btn'>Save Images</button>
      )}
      {(images.length > 0 || unsavedImages.length > 0) && (
        <div className='feed-display-container'>
          <h3 className='feed-display-heading'>Your Uploaded Images:</h3>
          <div className="feed-image-container">
            {[...images, ...unsavedImages].map((image, index) => (
              <div key={index} className="image-item">
                <img className='feed-image' src={image} alt={`Uploaded ${index}`} style={{ width: '150px', height: 'auto' }} />
                {index < images.length ? (
                  <button className='feed-delete-btn' onClick={() => handleDeleteImage(index)}>Delete</button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;

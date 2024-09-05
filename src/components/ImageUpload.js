import React, { useState } from 'react';
import Vector from '../assests/Vector.png';
import Frame from '../assests/Frame.png';
import Left from '../assests/Left.png';
import Right from '../assests/Right.png';
import Rectangle from '../assests/Rectangle.png'

const ImageUpload = () => {
  const [images, setImages] = useState([Rectangle,Rectangle,Rectangle]);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('imageUploadInput').click();
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between bg-[#363C43] rounded-3xl px-3 py-5 items-start'>
        <div className='flex flex-col gap-[100px]'>
          <img src={Vector} alt='' className='w-[24px] h-[24px]' />
          <img src={Frame} alt='' className='w-[24px] h-[30.69px]' />
        </div>

        <div className='flex flex-col gap-5 items-center justify-between w-[90%]'>
        <div className='flex items-center justify-between w-[100%]'>
          <button className='font-poppin font-medium text-20 leading-30 w-[149px] h-[62px] bg-black text-white rounded-2xl'>Gallery</button>
          <div className='flex items-center gap-5'>
            <input
              id='imageUploadInput'
              type='file'
              accept='image/*'
              onChange={handleAddImage}
              className='hidden'
            />
            <button
              onClick={triggerFileInput}
              className='w-[131.32px] h-[46px] text-white font-Plus font-extrabold text-12 leading-6.29 bg-[#6F787C] rounded-full flex gap-2 items-center justify-center shadow-sm shadow-white'
              
            >
              <span>+</span> ADD IMAGE
            </button>
            <div className='flex items-center'>
              <img src={Left} alt='' />
              <img src={Right} alt='' className='-ml-[40px]' />
            </div>
          </div>
        </div>


        <div className='grid grid-cols-3 gap-3 w-[100%]'>
        {images.map((image, index) => (
         <img key={index} src={image} alt={`uploaded-${index}`} className='w-[100%] h-[179px] object-cover rounded-md' />
       ))}
      </div>

        </div>


       
      </div>

     
    </div>
  );
};

export default ImageUpload;






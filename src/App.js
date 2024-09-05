import React from 'react';
import Tab1 from './components/Tab1';
import ImageUpload from './components/ImageUpload';

const App = () => {
  return (
    <div
      className="flex  justify-between px-5 py-10 "
      style={{ background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)' }}
    >
      {/* Left side */}
      <div className='w-[0%] xl:w-[45%] '>

      </div>

     {/* Right Side */}
    <div className='flex flex-col w-[90%] lg:w-[80%] xl:w-[55%] 2xl:w-[50%] gap-8 mx-auto xl:mx-0'> 
      <Tab1/>
      <ImageUpload/>
    </div>
 
    </div>
  );
};

export default App;


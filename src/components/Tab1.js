import React, { useState } from 'react';
import Vector from '../assests/Vector.png';
import Frame from '../assests/Frame.png'

const Tab1 = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const data = [
    {
      label: "About Me",
      value: "About Me",
      desc: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.\n\n
      I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
    },
    {
      label: "Experiences",
      value: "Experiences",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Recommended",
      value: "recommended",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className='flex justify-between bg-[#363C43] rounded-3xl px-3 py-5 items-start'>
      
      <div className='flex flex-col gap-[100px]'>
       <img src={Vector} alt='' className='w-[24px] h-[24px]' />
       <img src={Frame} alt='' className='w-[24px] h-[30.69px]'/>
      </div>


      <div className='flex flex-col w-[90%] gap-10'>

      <div className="flex items-center py-2 border border-black rounded-full bg-black text-[#A3ADB2] justify-evenly">
     {data.map(({ label, value }) => (
      <div
      key={value}
      className={`w-[30%] rounded-full ${activeTab === value ? 'shadow-[10px_23px_100px_50px_#1a202c]' : ''}`}
       >
      <button
        className={`tab ${activeTab === value ? 'active bg-[#363C43] text-white rounded-full' : ''} w-full py-4 text-center font-poppin font-medium text-18 leading-16.12`}
        onClick={() => setActiveTab(value)}
      >
        {label}
      </button>
    </div>
  ))}
</div>


      
      <div className="tabs-body">
        {data.map(({ value, desc }) => (
          activeTab === value && (
            <div key={value} className="tab-panel text-[#969696] font-Plus text-20 leading-25.2">
              {desc.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          )
        ))}
      </div>
      
      </div>
    </div>
  );
};

export default Tab1;


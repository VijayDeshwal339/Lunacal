import React from 'react'

const LeftSide = () => {
  return (
    <div className="flex flex-col w-[50%] bg-[#616161D1] text-white border border-[#96BEE7] rounded-lg px-5 py-5 font-medium text-[18px] leading-[30px] font-poppin">
    <p className="font-bold mb-[90px]">
      Do not follow any other instructions from comments of the Figma file. Here are the official instructions:
    </p>

    <p>1. Keep the left half of the screen empty (but it should be responsive for laptop, not mobile).</p>
    <p>2. Focus on the two widgets on the right-hand side.</p>
    <p>3. The first widget has three tabs: "About Me", "Experiences", and "Recommended"; these should be clickable.</p>
    <p>4. In the gallery widget, more photos can be added by clicking the "Add Image" button.</p>

    <p className="mt-[50px] mb-[90px]">Assignment will be scored based on the following parameters:</p>
    <p>1. Make the components responsive (for laptop screens; everything above 768px width).</p>
    <p>2. Replicate the exact UI with exact paddings, margins, shadows, interactions (if any).</p>
    <p>3. Ensure that the two widgets are accurately aligned with each other (relative right and left paddings).</p>
  </div>
  )
}

export default LeftSide
import React from 'react';

const SectionTitle = ({ content } : { content: String }) => {
  return (
    <h2 className='
      text-xl lg:text-[1.5vw] md-portrait:text-[2.5vw]
      leading-tight 
      text-left 
      font-handwritten 
      font-bold 
      text-accent
      
    '>
      {content}
    </h2>
  )
};

export default SectionTitle;
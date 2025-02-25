import React from 'react';

const ParagraphSmall = ({ content } : { content: String }) => {
  return (
    <p className='
      text-md md:text-lg
      leading-tight 
      text-left 
      font-sans 
      font-medium 
      text-dark
    '>
      {content}
    </p>
  )
};

export default ParagraphSmall;
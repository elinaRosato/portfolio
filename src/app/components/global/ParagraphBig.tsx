import React from 'react';

const ParagraphBig = ({ content } : { content: String }) => {
  return (
    <p className='
      text-xl md:text-2xl
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

export default ParagraphBig;
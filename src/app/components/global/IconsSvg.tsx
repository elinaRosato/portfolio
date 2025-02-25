import React from 'react'

const ForwardArrow : React.ReactElement = (
  <svg xmlns="http://www.w3.org/2000/svg" className='w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw]' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
)

const BackArrow : React.ReactElement = (
  <svg xmlns="http://www.w3.org/2000/svg" className='rotate-180 w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw]' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
)

const ExternalArrow : React.ReactElement = (
  <svg className='w-[4vw] h-[4vw] lg:w-[1.7vw] lg:h-[1.7vw]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#202124"  viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="#202124"></path>
  </svg>
)

export { ForwardArrow, BackArrow, ExternalArrow }
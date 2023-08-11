import React from 'react'

type Props = {}

function DownloadBtn({}: Props) {
  const handleDownload = () => {
    // Path to your PDF file in the public folder
    const pdfPath = '/ElinaRosato_cv.pdf'

    // Fetch the PDF file and create a Blob
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ElinaRosato_cv.pdf'; // Set the desired file name
        link.click();

        // Clean up by revoking the URL
        URL.revokeObjectURL(url);
      })
  }

  return (
    <button onClick={handleDownload} className='flex flex-row items-center gap-[0.5vw] font-roboto font-black text-darkest-dark md:inline-flex text-[1.2vw] pb-[0.1vw] border-b-[3px] border-b-darkest-dark hover:border-b-accent border-solid  '>
      download cv
      <svg className='w-[1.3vw] h-[1.3vw]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#202124"  viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="#202124"></path>
      </svg>
    </button>
  )
}

export default DownloadBtn
import React, { useState } from 'react'

function ResultCard({ shortUrl }) {
    const[copied, setCopied] = useState(false);

    if(!shortUrl) return null;

    const handleCopy = () =>{
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false);
        },2000);
    }

  return (
    <div className='result-box mt-4 p-3 bg-light rounded-3 border text-center'>
        <p className='mb-1 text-muted fw-semibold'>
            Your Shortened URL:
        </p>


        <div className='d-flex justify-content-center align-item-center gap-2 flex-wrap'>
            <span className="text-truncate px-2 font-monospace small text-primary fw-bold" style={{ maxWidth: '65%' }}>
              {shortUrl}
            </span>

            <button 
                onClick={handleCopy} 
                className={`btn ${copied ? 'btn-success' : 'btn-outline-primary'} btn-sm px-3`}
            >
                {copied ? 'Copied!' : 'Copy'}

            </button>
        </div>

    </div>

  )
}

export default ResultCard
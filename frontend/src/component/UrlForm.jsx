import React, { useState } from 'react'

function UrlForm({ onFormSubmit, loading }) {
    const [inputUrl, setInputUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputUrl.trim()) return;

        onFormSubmit(inputUrl);
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-lable fw-semibold'>Enter Long URL</label>
            <input 
                type="text" 
                className='form-control'    
                placeholder='https://example.com/..'
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                required
            />
        </div>

        <button type='submit' className='btn btn-primary w-100' disabled={loading}>
            {loading ? 'shortening...' : 'Generate Short Url'}

        </button>

    </form>
  )
}

export default UrlForm
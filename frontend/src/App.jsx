import React, { useState } from 'react'
import UrlForm from './component/UrlForm'
import ResultCard from './component/ResultCard';
import { shortenUrlApi } from './api/Api';
import './App.css';

function App() {

    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/urlshortner';

    const handleShorten = async (originalUrl) => {
      setLoading(true);
      setError(null);
      setShortUrl('');

      try{
        const data = await shortenUrlApi(originalUrl);
        const generatedLink = `${API_BASE_URL}/${data.shortUrl}`
        setShortUrl(generatedLink);

      } catch (error) {
        setError("Failed to shorten URL");
      } finally {
        setLoading(false);
      }
    }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card shadow-lg p-4 border-0 rounded-4'>


            <h2 className='text-center mb-4 text-primary fw-bold'>
                🔗 URL Shortener 
            </h2>

            <UrlForm onFormSubmit={handleShorten} loading={loading}/>

            {error && <div className='alert alert-danger mt-3 text-center'>{error}</div> }
            
            <ResultCard shortUrl={shortUrl}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
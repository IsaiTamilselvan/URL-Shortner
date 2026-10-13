const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/urlshortner';

export const shortenUrlApi = async (originalUrl) => {

    try{

        const response = await fetch(`${API_BASE_URL}/shortenurl`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({ originalUrl: originalUrl })
        });

        if(!response.ok){
            throw new Error("Failed to shorten URL");
        }

        const data = await response.json();
        console.log(data.shortUrl);
        return data;
    } catch (error){
        console.error("API Error",error);
        throw error;
    }
};
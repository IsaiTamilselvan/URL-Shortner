const API_BASE_URL = 'http://localhost:8080/urlshortner';

export const shortenUrlApi = async (originalUrl) => {
    try {
        const response = await fetch(`${API_BASE_URL}/shortenurl`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' // <-- Fix panniachu (Capital C & hyphen)
            },
            body: JSON.stringify({ originalUrl: originalUrl })
        });

        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
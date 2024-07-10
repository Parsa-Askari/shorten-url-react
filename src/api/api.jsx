import axios from 'axios';
const MY_TOKEN="k93YfiSYm8jyrByeb8v8hzX8md8wMHCOIs4EQiclzselMMG17bLDIQ44GFAJ"
const TINYURL_API_URL = 'https://api.tinyurl.com/create';

const shortenUrl = async (url) => {
    try {
        const response = await axios.post(
        TINYURL_API_URL,
        { url },
        {
            headers: {
            Authorization: `Bearer ${MY_TOKEN}`,
            'Content-Type': 'application/json',
            },
        }
        );
        return response.data;
    } catch (error) {
        console.error('Error shortening URL:', error);
        throw error;
    }
};

export {shortenUrl}
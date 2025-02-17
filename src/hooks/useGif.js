import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = () => {
   const [tag,setTag]=useState('');
   const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false'); 

  async function fetchData(tag) {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const { data } = await axios.get(tag ? `${url}&tag=${tag}`:url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {gif,loading,fetchData};

}

export default useGif

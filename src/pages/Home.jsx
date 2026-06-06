import React, { useEffect } from 'react'
import Categories from '../components/Categories'
import HomeGames from './HomeGames'
import API_BASE_URL from '../api'
import axios from 'axios'
import { useState } from 'react'
const Home = () => {
  const [category, setCategory] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_BASE_URL}`);
      const allGenres = response.data.map(item => item.genre);
      const uniqueGenres = [...new Set(allGenres)];
      setCategory(['All', ...uniqueGenres]);

      setDisplayGames(response.data);
    };
    fetchData();
    
  }, [])

  return (
    <div className={`w-full bg-[#00000045] pt-15`}>
      <h1 className='text-5xl font-bold m-auto border rounded w-100 p-2 bg-[#4e4e4eba] text-shadow-[0px_2px_1px_red] flex justify-center max-[450px]:w-auto max-[450px]:text-[4vw]'>GameVibe</h1>
      <Categories obj={category} />
      <HomeGames games={displayGames}/>
    </div>
  )
}

export default Home

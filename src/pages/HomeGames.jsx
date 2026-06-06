import {RiSearchLine } from "@remixicon/react"
import GameCard from "../components/GameCard"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useGameStore } from "../useGameStore"

const HomeGames = (props) => {
  const selectedCategory = useGameStore((state) => state.selectedCategory);
  const [displayGames, setDisplayGames] = useState(12);
  const [allGames,setAllGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState(null);
  const inp = useRef(null);
  
  const ShowNextGames = () => {
    setDisplayGames(displayGames + 12);
  }

  useMemo(() => {
    const filteredGames = props.games.filter(game => {
      if (!selectedCategory || selectedCategory === 'All') {
        return true;
      }
      return game.genre.toLowerCase() === selectedCategory.toLowerCase();
    });
    setAllGames(filteredGames);
    setSearchedGames(null);
    setDisplayGames(12);
  },[selectedCategory,props.games])
  
  const handleSearch = () => {
    const inpValue = inp.current.value.toLowerCase();
      const filtered = allGames.filter(item => {
        return item.title?.toLowerCase().includes(inpValue)
      })      
      if(filtered === null){
        setSearchedGames(null);
      } else{
      setSearchedGames(filtered);   
     }
  };  

  return (
    <div className='mt-5 w-[96%] m-auto h-auto p-2 rounded bg-white'>
      <div className='max-[700px]:w-full shadow border border-black w-[98%] m-auto h-10 rounded flex items-center justify-end gap-2 p-2'>
        <input ref={inp} className="DMSans w-full text-black outline-none" type="text" placeholder='Search games' onKeyDown={(key) => {
          if(key.code === 'Enter'){
            handleSearch()
          }
        }}/>
        <RiSearchLine onClick={handleSearch} className="text-black cursor-pointer"/>
      </div>

      <div className={`flex justify-around flex-wrap h-auto max-[700px]:flex-col`}>
        {searchedGames && searchedGames.length === 0 ? (
          <div className="text-black text-2xl font-bold py-10 text-center">No results found <br /> "{inp.current.value}"</div>
        ) : (
          (searchedGames 
            ? searchedGames 
            : (selectedCategory && selectedCategory !== 'All' ? allGames : allGames.slice(0, displayGames))
          ).map((item, index) => {
            return <GameCard thumbnail={item.thumbnail} title={item.title} desc={item.short_description} key={index} date={item.release_date} categ={item.genre} platform={item.platform} download={item.game_url} id={item.id} />;
          })
        )}
      </div>

      <div className={` ${searchedGames || displayGames >= allGames.length ? 'hidden' : 'flex'} flex items-center justify-center gap-5 mt-5`}>
        <button className="transition duration-200 cursor-pointer  bg-[#206ba4] text-white px-4 py-2 rounded hover:bg-[#cdd7df]" onClick={ShowNextGames}>Load More</button>
      </div>
    </div>
  )
}

export default HomeGames

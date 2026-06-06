import { RiArrowLeftLine, RiLoader4Line } from '@remixicon/react'
import { RiArrowRightSLine } from '@remixicon/react'
import { RiArrowLeftSLine } from '@remixicon/react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailSection = () => {
  let { id } = useParams();
  const [game, setGame] = useState()
  const [displayImage, setDisplayImage] = useState(0);

  useEffect(() => {
    async function callAPi() {
      const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`)
      setGame(response.data)
    }
    if (id) callAPi()
  }, [id])

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-2xl gap-4">
        <RiLoader4Line className="animate-spin text-5xl text-cyan-500" />
        <p className="animate-pulse">Loading Game Details...</p>
      </div>
    )
  }

  const DownloadGame = () => {
    window.open(game.game_url, '_blank');
  }
  return (
    <div className='flex items-center py-15 flex-col'>

      <Link to="/" className='absolute left-5 top-5 bg-gray-600 w-12.5 h-12.5 flex justify-center items-center rounded-full cursor-pointer'>
        <RiArrowLeftLine className='text-3xl cursor-pointer' />
      </Link>

      <h2 className='text-4xl tracking-wider font-bold'>Details</h2>

      <div className='px-10 rounded max-w-[85vw] border mt-5 bg-white/5 backdrop-blur-md border-white/10 p-6 transition-all duration-500 ease-out animate-in fade-in zoom-in-95'>
        {/* Header */}
        <div className='flex gap-5 items-center max-[730px]:flex-col max-[730px]:gap-8'>
          <div className='h-50 w-50 shrink-0 rounded-full overflow-hidden'><img className='w-full h-full object-contain bg-black/20' src={game.thumbnail} alt="" /></div>

          <div className='max-[730px]:text-center max-[730px]:mb-4'>
            <h2 className='text-2xl font-bold tracking-wide max-[730px]:text-[7vw] max-[730px]:mb-2'>{game.title}</h2>
            <p className='DMSans'>{game.short_description}</p>
            <button className='DMSans mt-2 transition duration-200 cursor-pointer  bg-[#206ba4] text-white px-4 py-2 rounded hover:bg-[#1a5a8c] max-[730px]:my-4 max-[730px]:text-[4vw]' onClick={DownloadGame}>Download</button>
          </div>
        </div>

        {/* Body */}
        <div>
          {/* About Section */}
          <div>
            <h2 className='DMSans text-center text-2xl text-[#f0ffff] text-shadow-[0px_0px_3px_#00000096]'>About This Game</h2>
            <div className='DMSans w-full p-4 flex justify-around rounded bg-[#00000033] mt-5 max-[730px]:flex-col max-[730px]:text-center max-[730px]:gap-4'>
              <p>{game.genre}</p>
              <p>{game.platform}</p>
              <p>{game.developer}</p>
              <p>{game.release_date}</p>
            </div>
            {/* Requirments */}
            {game.minimum_system_requirements && (
              <div>
                <h2 className='DMSans text-center py-5 text-2xl text-[#f0ffff] text-shadow-[0px_0px_3px_#00000096]'>Minimum System Requirments</h2>
                <div className='DMSans flex justify-between mt-2 bg-[#00000033] p-4 rounded max-[730px]:flex-col max-[730px]:text-center max-[730px]:text-[2vw]'>
                  <p>Graphics : </p>
                  <p>{game.minimum_system_requirements.graphics}</p>
                </div>
                <div className='DMSans flex justify-between mt-2 bg-[#00000033] p-4 rounded max-[730px]:flex-col max-[730px]:text-center max-[730px]:text-[2vw]
                '>
                  <p>Memory : </p>
                  <p>{game.minimum_system_requirements.memory}</p>
                </div>
                <div className='DMSans flex justify-between mt-2 bg-[#00000033] p-4 rounded max-[730px]:flex-col max-[730px]:text-center max-[730px]:text-[2vw]
                '>
                  <p>OS : </p>
                  <p>{game.minimum_system_requirements.os}</p>
                </div>
                <div className='DMSans flex justify-between mt-2 bg-[#00000033] p-4 rounded max-[730px]:flex-col max-[730px]:text-center max-[730px]:text-[2vw]
                '>
                  <p>Processor : </p>
                  <p>{game.minimum_system_requirements.processor}</p>
                </div>
                <div className='DMSans flex justify-between mt-2 bg-[#00000033] p-4 rounded max-[730px]:flex-col max-[730px]:text-center max-[730px]:text-[2vw]
                '>
                
                  <p>Storage : </p>
                  <p>{game.minimum_system_requirements.storage}</p>
                </div>
              </div>
            )}

          </div>

          <div className='relative overflow-hidden rounded mt-5 group'>
            {/* Left Arrow */}
            <div
              onClick={() => setDisplayImage(prev => (prev === 0 ? game.screenshots.length - 1 : prev - 1))}
              className='z-10 border border-white absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600/80 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-500'
            >
              <RiArrowLeftSLine />
            </div>

            {/* Right Arrow */}
            <div
              onClick={() => setDisplayImage(prev => (prev === game.screenshots.length - 1 ? 0 : prev + 1))}
              className='z-10 border border-white absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600/80 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-500'
            >
              <RiArrowRightSLine />
            </div>

            <div
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) will-change-transform"
              style={{ transform: `translateX(-${displayImage * 100}%)` }}
            >
              {game.screenshots && game.screenshots.map((screenshot, index) => (
                <img key={index} className="w-full h-auto shrink-0 object-cover aspect-video" src={screenshot.image} alt={`screenshot-${index}`} loading="lazy" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailSection

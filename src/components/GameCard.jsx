import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const GameCard = (props) => {
  const navigate = useNavigate();
  const SendDetails = () => {
    navigate(`detail/${props.id}`);
  }

  const DownloadGame = () => {
    window.open(props.download, '_blank');
  }

  return (
    <div className='Roboto ml-1 w-[48%] p-2 border mt-2 rounded text-black max-[700px]:w-full'>
        <div>
        <img className='w-full h-64 rounded m-2' src={props.thumbnail} alt={props.title} />
        </div>
        <div>
      <h2 className='font-bold text-2xl text-[#206ba4] mb-2'>{props.title}</h2>
      <p>{props.desc}</p>

      <div className='flex items-center justify-start gap-5 mt-2 text-sm text-[#4e4e4e] '>
        <p>{props.date}</p>
        <p>{props.categ}</p>
        <p>{props.platform}</p>
      </div>
      <div className='flex gap-2 mt-2'>
        <button className='transition duration-200 cursor-pointer  bg-[#206ba4] text-white px-4 py-2 rounded hover:bg-[#1a5a8c]' onClick={DownloadGame}>Download</button>
        <Link to={`/detail/${props.id}`} className='transition duration-200 cursor-pointer bg-[#f0f0f0] text-black px-4 py-2 rounded hover:bg-[#e0e0e0]' onClick={SendDetails}>View Details</Link>
      </div>
      </div>
    </div>
  )
}

export default GameCard

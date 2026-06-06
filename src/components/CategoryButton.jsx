import {useGameStore} from '../useGameStore'

const CategoryButton = (props) => {
  const setCategory = useGameStore((state) => state.setCategory);
  const selectedCategory = useGameStore((state) => state.selectedCategory);

  const handleCategory = () => {
    setCategory(props.title)
  }

  const isActive = selectedCategory === props.title || (props.title === 'All' && !selectedCategory);

  return (
    <>
    <button 
      className={`m-2 cursor-pointer p-3 rounded shadow font-bold tracking-wider transition-all duration-200 ${isActive ? 'bg-[#206ba4] text-white scale-105' : 'bg-white text-[#4e4e4e]'}`} 
      onClick={handleCategory}
    >
      {props.title}
    </button>

    </>
  )
}

export default CategoryButton

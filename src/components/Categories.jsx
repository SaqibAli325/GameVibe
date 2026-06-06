import CategoryButton from './CategoryButton'

const Categories = (props) => {
  return (
    <div className='max-w-screen h-auto bg-[#00000045] mt-10 flex items-center justify-center gap-5'>

        <div className='m-auto max-w-[97%]'>

{props.obj.map((item, index) => {
    return <CategoryButton key={index} title={item} />
})}
        
        </div>

    </div>
  )
}

export default Categories

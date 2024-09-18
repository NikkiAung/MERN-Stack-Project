function Ingredient({ingredients}) {
  return (
    <div className='space-x-2'>
        <span>Ingredients -</span>
        {!!ingredients && ingredients.map((ingredient,i) => (
            <span key={i} className='bg-orange-400 rounded-full px-2 py-1 text-white'>{ingredient}</span>
        ))}
    </div>
  )
}

export default Ingredient

function RecipeCard({recipe}) {
    return (
        <div key={recipe._id} className='bg-white p-5 rounded-2xl space-y-3'>
            <h3 className='font-bold text-xl text-orange-400'>{recipe.title}</h3>
            <p>Description</p>
            <p>{recipe.description}</p>
            <div className='space-x-2'>
              <span>Ingredients -</span>
              {!!recipe.ingredients && recipe.ingredients.map((ingredient,i) => (
                    <span key={i} className='bg-orange-400 rounded-full px-2 py-1'>{ingredient}</span>
              ))}
          
            </div>
            <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
        </div>
    )
}

export default RecipeCard

import Ingredient from "./Ingredient"
function RecipeCard({recipe}) {
    return (
        <div key={recipe._id} className='bg-white p-5 rounded-2xl space-y-3'>
            <h3 className='font-bold text-xl text-orange-400'>{recipe.title}</h3>
            <p>Description</p>
            <p>{recipe.description}</p>
            <Ingredient ingredients={recipe.ingredients}/>
            <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
        </div>
    )
}

export default RecipeCard

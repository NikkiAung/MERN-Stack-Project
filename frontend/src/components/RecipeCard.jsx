import { Link } from "react-router-dom";
import Ingredient from "./Ingredient"
import axios from "../helpers/axios"
function RecipeCard({recipe, onDeleteFrontEnd}) {
    const delRecipe = async () => {
        const response = await axios.delete('/api/recipes/'+recipe._id);
        if (response.status === 200) {
            console.log('Recipe deleted on backend!');
            onDeleteFrontEnd(recipe._id);
        }
    }
    return (
        <div key={recipe._id} className='bg-white p-5 rounded-2xl space-y-3'>
            <img className="mx-auto h-64 object-contain" src={import.meta.env.VITE_BACKEND_URL+recipe.photo} alt="recipe-img" />
            <div className="flex justify-between items-center">
                <h3 className='font-bold text-xl text-orange-400'>{recipe.title}</h3>
                <div className="flex space-x-2">
                    <Link to={`recipes/update/${recipe._id}`} className="bg-yellow-400 text-sm px-2 py-1 text-white rounded-full">Edit</Link>
                    <button onClick={delRecipe} className="bg-red-500 text-sm px-2 py-1 text-white rounded-full">Delete</button>
                </div>
            </div>
            <p>Description</p>
            <p>{recipe.description}</p>
            <Ingredient ingredients={recipe.ingredients}/>
            <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
        </div>
    )
}

export default RecipeCard

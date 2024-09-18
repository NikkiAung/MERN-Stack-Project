import plus from '../assets/plus.svg'
import Ingredient from '../components/Ingredient'
function RecipeFrom() {
  return (
    <div className='mx-auto max-w-md border-2 border-white p-4'>
        <h1 className='mb-6 text-xl font-bold text-orange-400 text-center'>Recipe Create Form</h1>
        <form action="" className='space-y-5'>
          <input name='title' type="text" placeholder='Recipe Title' className='w-full p-1'/>
          <textarea name="description" id="" placeholder='Recipe Description' rows="5" className='w-full p-1'></textarea>
          <div className='flex space-x-2'>
            <input type="text" placeholder='Recipe ingredient' className='w-full p-1'/>
            <img src={plus} alt="plus" className='cursor-pointer'/>
          </div>
          <div>
            <Ingredient ingredients={['3 eggs', 'water']}/>
          </div>
          <button className='w-full bg-orange-400 rounded-full py-1 px-3 text-white'>Create Recipe</button>
        </form>
    </div>
  )
}

export default RecipeFrom

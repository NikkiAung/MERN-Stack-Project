import { useEffect, useState } from 'react'
import plus from '../assets/plus.svg'
import Ingredient from '../components/Ingredient'
import axios from '../helpers/axios';
import { useNavigate, useParams} from 'react-router-dom';

function RecipeFrom() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [errors, setErrors] = useState([]);
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const addIngredient = () => {
    setIngredients(prev => [newIngredient,...prev]);
    setNewIngredient('');
  }
  useEffect(()=> {
    const fetchRecipe = async() => {
      if(id) {
        let res = await axios.get('/api/recipes/'+id);

        if(res.status === 200) {
          const {title, description, ingredients} = res.data;
          setTitle(title);
          setDescription(description);
          setIngredients(ingredients);
        }
      }
    }
    fetchRecipe();
  },[id])
  const submitRecipe = async(e) => {
    try {
      e.preventDefault();
      const recipe = {
        title,
        description,
        ingredients
      }
      
      const res = id 
      ? await axios.patch(`/api/recipes/${id}`, recipe) 
      : await axios.post('/api/recipes', recipe);
      console.log(res);
      if(res.status === 200) {
        navigate('/')
      }
      let formData = new FormData;
      formData.set('photo',file);
      let uploadRes = await axios.post(`/api/recipes/${res.data._id}/upload`,formData,{
        headers : {
          Accept : "multipart/form-data"
        }
      })
    } catch (error) {
      setErrors(Object.keys(error.response.data.error))
    }
  }
  const upload = (e) => {
    let file = e.target.files[0]
    setFile(file);

    let fileReader = new FileReader;
    fileReader.onload = (e) => {
      setPreview(e.target.result);
    }
    fileReader.readAsDataURL(file);
  }
  return (
    <div className='mx-auto max-w-md border-2 border-white p-4'>
        <h1 className='mb-6 text-xl font-bold text-orange-400 text-center'>Recipe {id ? 'Update' : 'Create'} Form</h1>
        <form action="" className='space-y-5' onSubmit={submitRecipe}>
          <ul className='list-disc pl-5'>
            {!!errors.length && errors.map((error,i) => (
              <li key={i} className='text-red-600 text-sm'>{error} is invalid value!</li>
            ))}
          </ul>
          <input type="file" onChange={upload} />
          {preview && <img src={preview} alt="preview"/>}
          <input value={title} onChange={e=> setTitle(e.target.value)} name='title' type="text" placeholder='Recipe Title' className='w-full p-1'/>
          <textarea value={description} onChange={e=> setDescription(e.target.value)} name="description" id="" placeholder='Recipe Description' rows="5" className='w-full p-1'></textarea>
          <div className='flex space-x-2'>
            <input value={newIngredient} onChange={e => setNewIngredient(e.target.value)} type="text" placeholder='Recipe ingredient' className='w-full p-1'/>
            <img onClick={addIngredient} src={plus} alt="plus" className='cursor-pointer'/>
          </div>
          <div>
            <Ingredient ingredients={ingredients}/>
          </div>
          <button type='submit' className='w-full bg-orange-400 rounded-full py-1 px-3 text-white'>{id ? 'Update' : 'Create'} Recipe</button>
        </form>
    </div>
  )
}

export default RecipeFrom

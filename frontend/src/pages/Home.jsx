import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [links, setLinks] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const navigate = useNavigate();
  let page = searchQuery.get('page') || 1;
  page = parseInt(page) ? parseInt(page) : 1;
  useEffect(()=> {
    let fetchRecipes = async () => {
      let response = await axios.get('/api/recipes?page='+page); 
      if (response.status === 200) {
        let data = response.data;
        // console.log(data.data);
        setLinks(data.links);
        setRecipes(data.data);
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    }
    fetchRecipes();
  }, [page])
  let onDeleteFrontEnd = (_id) => { 
    if(recipes.length === 1 && page > 1) {
      navigate('/?page='+(page-1));
    }else{
      setRecipes(prev => prev.filter(r => r._id !== _id));
    }
  }
  return (
    <>
      <div className='grid grid-cols-3 space-y-3 space-x-3'>
          {!!recipes.length && recipes.map(recipe => (
              <RecipeCard recipe={recipe} key={recipe._id} onDeleteFrontEnd={onDeleteFrontEnd}/>
          ))}
      </div>
      {!!links && <Pagination page={page} links={links}/>}
    </>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [links, setLinks] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const navigate = useNavigate();
  let page = searchQuery.get('page') || 1;
  page = parseInt(page);
  useEffect(()=> {
    let fetchRecipes = async () => {
      let response = await fetch('http://localhost:8000/api/recipes?page='+page);
      if (response.ok) {
        let {links, data} = await response.json();
        setLinks(links);
        setRecipes(data);
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
    <div className='space-y-3'>
        {!!recipes.length && recipes.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe._id} onDeleteFrontEnd={onDeleteFrontEnd}/>
        ))}
        {!!links && <Pagination page={page} links={links}/>} 
    </div>
  )
}

export default Home

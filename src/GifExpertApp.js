import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   const [categorie,setCategories] = useState (['One Punch']);
     
  return (
      <>
      
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>{
          categorie.map( category=> (

            <GifGrid 
            key={category}
            category={category}
            />
  ))
          }
      </ol>

      </>
   
  )
}

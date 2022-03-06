import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GrifGridtem } from './GrifGridtem';

export const GifGrid = ({category}) => {
 //const state = useFetchGifs();
 const { data:images,loading}= useFetchGifs(category);
 
    /*   const[images,setImages] = useState([]);

    useEffect (() => {

        getGifs(category)
        .then(setImages);
       },   [category])
   */ //getGifs();
  return (
      <>  
       <h3 className='animate__animated animate__fadeIn'>{category}</h3> 

{loading && <p className='animate__animated animate__flash'> loading</p>}
       
        {<div className='card-grid'>
        
    {
        images.map(img =>(
            <GrifGridtem 
            key={img.id}
            {...img}/>
        ))
    }

        

        </div> }
        </>

  )
}

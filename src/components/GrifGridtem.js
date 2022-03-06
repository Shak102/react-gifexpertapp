import React from 'react'

export const GrifGridtem = ({title,url}) => {
    //console.log({id,title,url});
  return (
    <div className='card animate__animated animate__fadeIn'>
<img src={url} alt={title}/>
<p>{title}</p>
        {/*img.title*/}
    </div>
  )
}

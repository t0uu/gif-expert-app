import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from '../components/GifGridItem'

   // api.giphy.com/v1/gifs/search?api_key=afwYaxwkrgRl3WKN8z7yEw7m7etdb2Jf
   
// No se deben colocar ejecuciones directas dentro de un funcional component, porque cada vez que se renderiza la función vuelve a ejecutar dicha función.
const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category)
    return (
        <>
  <h3>{category}</h3>
  {isLoading && <h2>Cargando...</h2> }
<div className='card-grid'>
{images.map((image) => 
    (
        <GifGridItem key={image.id}
        title={image.title}
        url={image.url}
        {...image}
        />
        )
)}
</div>
 
   </>
  )
}

export default GifGrid
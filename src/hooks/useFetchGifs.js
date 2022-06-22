import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";




export const useFetchGifs = (category) => {
 const [images, setImages] = useState([])
 const [isLoading, setisLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setisLoading(false)
    }
    // El useEffect es un hook de React para disparar efectos secundarios, se entiende por un proceso a algo que cuando cambio quiero disparar un efecto, así sucesivamente en cada caso queremos decir que cuando algo cambie queremos disparar un efecto.

    useEffect( () => {
      getImages();
    },[])
    // dentro del useEffect, mandamos el callback y dentro del callback enviamos getGifs que sera ejecutado una sola vez , ya que al estar presente la dependencia solo se disparara una sola vez.

    return {
        images: images,
        isLoading: isLoading
    }
}

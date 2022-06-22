import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
   const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)){
      return
    }
    // setCategories(categories.concat([newCategory]))
    // setCategories([...categories,'Valorant'])
    setCategories(category => [...category, newCategory])
   }

  return (
  <>
    {/* // titulo */}
    <h1>GifExpertApp</h1>
{/* //   input */}
<AddCategory //setCategories={setCategories} categories={categories}
onNewCategory={event => onAddCategory(event)}
/>

{/* // Listado de Gif */}
{categories.map((category) => 
 (
  <GifGrid 
  key={category} 
  category={category}/>
  )
)}


    {/* //Gif Items  */}
  </>
    )
}

export default GifExpertApp
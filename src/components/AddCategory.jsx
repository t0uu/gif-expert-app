import React,{useState} from 'react'

const AddCategory = ({onNewCategory}) => {

    
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
       if(inputValue.trim().length <= 1){
        return
       }
        // En React 18, no dispara la renderizacion del componente hasta que la función termine.    
        // setCategories([...categories, inputValue]);
        onNewCategory(inputValue)
        setinputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
    <input  type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange}/>
    </form>
  )
}

export default AddCategory
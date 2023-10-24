import { useState } from "react";
import {toast} from "react-hot-toast";


export const SearchForm = ({onSubmit}) =>{
    const [inputValue, setInputValue] = useState('');  

    const handleChangeInput = (evt) => {
        setInputValue(evt.target.value.toLowerCase().trim());    
    } 

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue === '') {   
            toast('Please fill in the search value.', { icon: '👈' });       
        }
        onSubmit(inputValue);       
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>            
                <input 
                type="text" 
                autoComplete="off" 
                autoFocus placeholder="Search movie" 
                name="query" 
                value={inputValue}
                onChange={handleChangeInput}/>
                <btn type="submit" >Search</btn>
            </form>
        </div>        
    )
};
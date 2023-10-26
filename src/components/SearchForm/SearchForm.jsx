// import { useState } from "react";
import { useState } from "react";
// import {toast} from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
    const [query, setQuery] = useState ();
     const [, setSearchParams] = useSearchParams();

    const handleChangeInput = (evt) => {
        setQuery(evt.target.value);    
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    //     if (inputValue === '') {   
    //         toast('Please fill in the search value.', { icon: '👈' });       
    //     }
    //     onSubmit(inputValue);  
        setSearchParams(query !== '' ? { query }  : {});
    };

      
    return (
        <main >
            <form onSubmit={handleSubmit}>            
                <input 
                type="text" 
                autoComplete="off" 
                autoFocus placeholder="Search movie" 
                name="query" 
                // value={inputValue}
                onChange={handleChangeInput}
                />
                <button type="submit" >Search</button>
            </form>
        </main>        
    );
};
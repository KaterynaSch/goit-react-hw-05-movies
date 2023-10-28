// import { useState } from "react";
import { useState } from "react";
// import {toast} from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { Input, Wrapper } from "./SearchForm.styled";

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
        <Wrapper>
            <form onSubmit={handleSubmit}>            
                <Input 
                type="text" 
                autoComplete="off" 
                autoFocus placeholder="Search movie" 
                name="query" 
                // value={inputValue}
                onChange={handleChangeInput}
                />
                <button type="submit" >Search</button>
            </form>
        </Wrapper>        
    );
};
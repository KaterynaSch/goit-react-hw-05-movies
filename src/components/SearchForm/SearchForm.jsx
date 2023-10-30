import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Form, Input } from "./SearchForm.styled";

export const SearchForm = () => {
    const [query, setQuery] = useState ();
     const [, setSearchParams] = useSearchParams();
     const formRef = useRef (null);

    const handleChangeInput = (evt) => {
        setQuery(evt.target.value);    
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();      
        setSearchParams(query !== '' ? { query }  : {});
        formRef.current.reset();
    };
      
    return (
        
        <Form onSubmit={handleSubmit}>            
            <Input 
            type="text" 
            autoComplete="off" 
            autoFocus placeholder="Search movie" 
            name="query" 
            onChange={handleChangeInput}
            />
            <Button type="submit" >Search</Button>
        </Form>
           
    );
};
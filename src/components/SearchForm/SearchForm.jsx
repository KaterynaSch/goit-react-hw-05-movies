import { Button, Form, Input } from "./SearchForm.styled";
import toast from "react-hot-toast";

export const SearchForm = ({onSubmit}) => {
    
    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        const queryValue = evt.target.elements.query.value;

        if(!queryValue){
            toast.error('Please fill in the search value.', { icon: '👈' });         
        } else{
            onSubmit(queryValue);
        }        
        evt.target.reset();
    };
      
    return (
        <Form onSubmit={handleSubmit}>            
            <Input 
            type="text" 
            autoComplete="off" 
            autoFocus placeholder="Search movie" 
            name="query"        
            />
            <Button type="submit" >Search</Button>
        </Form>           
    );
};
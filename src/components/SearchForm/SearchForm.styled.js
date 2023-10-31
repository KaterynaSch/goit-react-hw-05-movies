import styled from "styled-components";

export const Form = styled.form`
  display: flex;  
  align-items: center; 
  flex-wrap: nowrap;
  gap: 10px;  
`

export const Input = styled.input`
  font-size: 16px;
  width: 150px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;  
`

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 18px;
  color: #0d57aa;
  background-color: #FFDCCC;
  border: 1px solid #0d57aa;
  border-radius: 8px;
  transition: background-color 250ms ease-in-out, 
    color 250ms ease-in-out; 

  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`
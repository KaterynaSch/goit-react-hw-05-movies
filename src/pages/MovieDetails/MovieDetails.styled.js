import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

`
export const DetailsList = styled.ul`
    display: flex;
    gap: 10px;
    margin-top: 24px;
    
`
export const DetailsLink = styled(Link)`    
    font-size: 18px;
    font-weight: 500;
    padding: 6px;
    border-radius: 6px;
    text-decoration: none;
    color: #1a1a8d;
    transition: color 250 ease-in-out;
  
    &:hover,
    &:focus {
        color: #fff;
        background-color: #4848a4;
  }
`
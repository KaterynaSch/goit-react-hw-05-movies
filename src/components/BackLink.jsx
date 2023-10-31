import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;  
  color: #E87946;

  &:hover,
  &:focus {
    color: #1a1a8d;
  }
`

export const BackLink = ({to, children}) => {
    return (
        <StyledLink to={to}>
        <HiArrowLeft size="24"/>
        {children}
        </StyledLink>
    );
}
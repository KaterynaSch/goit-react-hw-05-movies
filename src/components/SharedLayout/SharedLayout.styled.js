import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px;  
  background-color: #FFDCCC;
  box-shadow: 0px 4px 8px rgba(46, 47, 66, 0.08), 
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  > nav {
    display: flex;
  }
`
export const LinkPage = styled(NavLink)`
  color: #E89E46;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  
  &.active {
    color: #fff;
    background-color: #E89E46;
  }
`;
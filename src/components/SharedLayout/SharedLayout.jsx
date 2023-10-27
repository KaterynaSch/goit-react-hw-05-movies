import { NavLink, Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import styled from "styled-components";
const Link = styled(NavLink)`
    &:active {
        color: orange;
    }
`
export const SharedLayout = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>                   
                </nav>
            </header>
           
                <Outlet/>
            
            <Toaster position="top-right" />
        </div>
    );
};
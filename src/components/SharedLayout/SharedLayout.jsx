import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { Suspense } from "react";
import { Container, Header, Link } from "./SharedLayout.styled";

const SharedLayout = () => {
    return(
        <Container>
            <Header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>                   
                </nav>
            </Header>
            <main>
                {/* можна додати лоудер з ліби */}
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
            </main>            
            <Toaster position="top-right" />
        </Container>
    );
};
export default SharedLayout;
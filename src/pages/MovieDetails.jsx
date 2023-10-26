import { Link, Outlet } from "react-router-dom";

export default function MovieDetails() {
    return(
        <div>
            <h1>Home</h1>
             <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>                
            </ul>
            {/* <Outlet />  */}
        </div>
    )
}
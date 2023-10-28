import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";

import Movies from "pages/Movies";
import { Navigate, Route, Routes } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    //   My API_key: 1c860efb7ea3ee5f6f74a151b9c6036d;
    // </div>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
      <Route path="*" element= {<Navigate to = {"/"}/>}/>
    </Routes>
  );
};

import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../shared/context';

export default function useMovieList() {  
  const [user] = useContext(UserContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // get movies from Firestore
    // set movies to  local storage
  }, []);

  return { user, movies };
}

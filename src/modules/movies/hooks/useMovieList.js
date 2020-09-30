import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from "../../../shared/state/movieStore";

export default function useMovieList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.current);
  const movies = useSelector((state) => state.movie.list);

  useEffect(() => {
    // get movies from Firestore
    // save movies to Redux
  }, []);

  return { user, movies };
}

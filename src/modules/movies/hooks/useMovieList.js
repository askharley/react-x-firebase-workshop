import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../shared/services/movieService';
import { actionCreators } from "../../../shared/state/movieStore";

export default function useMovieList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.current);
  const movies = useSelector((state) => state.movie.list);

  useEffect(() => {
    getMovies() 
      .then((res) => dispatch(actionCreators.setMovies(res)));
  }, []);

  return { user, movies };
}

import { useEffect, useContext } from 'react';
import { UserContext } from '../../../shared/context';
import { useEkko } from 'use-ekko';
import { getMovies } from '../../../shared/services/movieService';

export default function useMovieList() {
  const [user] = useContext(UserContext);
  const [movies, setMovies] = useEkko('movies', null);

  useEffect(() => {
    getMovies()
      .then((res) => setMovies(res));
  }, [setMovies]);

  return { user, movies };
}

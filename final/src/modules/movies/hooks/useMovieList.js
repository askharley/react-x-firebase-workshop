import { useEffect, useContext } from 'react';
import { UserContext } from '../../../shared/context';
import { useEkko } from 'use-ekko';
import { streamMovies } from '../../../shared/services/movieService';
import useStreamCollection from '../../../shared/hooks/useStreamCollection';

export default function useMovieList() {
  const [user, setUser] = useEkko('user', null);
  const movies = useStreamCollection('movies');

  return { user, movies };
}

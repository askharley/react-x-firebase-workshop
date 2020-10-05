import { useContext } from 'react';
import { UserContext } from '../../../shared/context';
import useStreamCollection from '../../../shared/hooks/useStreamCollection';

export default function useMovieList() {
  const [user] = useContext(UserContext);
  const movies = useStreamCollection('movies');

  return { user, movies };
}

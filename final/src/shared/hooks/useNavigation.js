import { useHistory, useLocation } from "react-router-dom";

/**
 * useNavigation provides us with wrapper methods that make navigation simpler in our application
 */
export default function useNagivation() {
  const history = useHistory();
  const location = useLocation();

  const replace = (module, id) => {
    id ? history.replace(`/${module}/${id}`) : history.replace(`/${module}/`);
  }

  const pop = () => {
    history.goBack();
  }

  const push = (path) => {
    history.push(path);
  }

  return { location, replace, pop, push };
}

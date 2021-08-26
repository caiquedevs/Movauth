import { Route } from "react-router-dom";

export default function PrivateRoute({ isPrivate, ...rest }: any): any {
  const isLoggedIn = true;

  // Se a rota é privada e não passou na autenticação
  if (isPrivate && !isLoggedIn) {
    return window.location.assign("www.google.com.br");
  }

  // Se não for privada retorna uma rota normal
  return <Route {...rest} />;
}

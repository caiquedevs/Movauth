import { ReactNode } from "react";

import { Container } from "./styled";

interface LoginProps {
  children: ReactNode;
}

function Login({ children }: LoginProps) {
  return (
    <Container>
      <h1>Login</h1>
      {children}
    </Container>
  );
}

export default Login;

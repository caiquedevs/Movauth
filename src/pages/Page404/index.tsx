import { ReactNode } from "react";

import { Container } from "./styled";

interface Page404Props {
  children: ReactNode;
}

function Page404({ children }: Page404Props) {
  return (
    <Container>
      <h1>Page404</h1>
      {children}
    </Container>
  );
}

export default Page404;

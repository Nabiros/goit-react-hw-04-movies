import { Navigation } from "../Navigation/Navigation";
import { Container } from "semantic-ui-react";

export const AppBar = () => {
  return (
    <header>
      <Container textAlign="left">
        <Navigation />
      </Container>
    </header>
  );
};

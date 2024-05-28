import React from "react";
import "./App.css";
import { Container, Wrapper } from "./layout";

const App = () => {
  return (
    <Wrapper>
      <Container>
        <div className="text">Hello, React!</div>
      </Container>
    </Wrapper>
  );
};

export default App;

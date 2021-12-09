import React, { useState } from 'react';
import styled from 'styled-components';
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const { currentTarget: {value} } = event;
    setValue(value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  }

  return (
    <div>
      {/* <Circle bgColor="teal" borderColor="black" />
      <Circle bgColor="tomato" text="I'm here" /> */}

      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>

      <Container>
        <H1>다크테마가 적용된 h1</H1>
      </Container>
    </div>
  );
}

export default App;

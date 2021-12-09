import React, { useState } from 'react';
import Circle from "./Circle";

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
    </div>
  );
}

export default App;

import { useState } from 'react';
import styled from "styled-components";

interface ContainerProps { // Container div가 받을 props객체 인터페이스
    bgColor: string;
    borderColor: string;
}

// <ContainerProps> 를 추가해서 객체타입 지정
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps { // Circle 컴포넌트의 props객체 인터페이스
    bgColor: string;
    borderColor?: string; // Optional Props (string or undefined)
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps) { // props를 객체타입으로 지정
    const [counter, setCounter] = useState(1); // number만 허용됨 (기본폼)
    // const [counter, setCounter] = useState<number|boolean>(1); // 2개 이상 타입을 원할 때
    setCounter(2); // number 타입을 기본값으로 했음
    // setCounter(true); // <number|boolean> 추가하면 이 것도 가능함
    // setCounter("string"); // !에러발생!

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

// 아래처럼 props: CirlceProps로도 사용이 가능하다.
// function Circle(props: CircleProps) {
//     return <Container bgColor={props.bgColor}/>;
// }

export default Circle;

interface PlayerShape {
    name: string;
    age: string;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old!`;
sayHello({name: "Raven", age: "12"});
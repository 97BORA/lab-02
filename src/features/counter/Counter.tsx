import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    // count => 현재 state 값
    // setCount => count state 값을 바꾸는 함수
    // useState => state를 만들 때 사용하는 React 함수
    // 0 => count의 초기 state 값
    // useState(0) => 초기값 0으로 count state를 만든다

    const handleClick = () => {
        // 변수 + 화살표 함수
        setCount((currentCount) => {
            // currentCount => React가 현재 count 값을 함수의 매개변수로 전달한다.
            if (currentCount >= 7) return 7;

            return currentCount + 1;
            // 종료, 반환
        });
    };

    return <div onClick={handleClick}>{count}</div>;
}

export default Counter;

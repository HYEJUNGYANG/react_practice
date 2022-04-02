import React, { useCallback, useEffect, useRef, useState } from 'react';

// 클래스에서 멤버변수는 클래스가 만들어질 때 한 번만 만들어지고
// render 함수만 반복적으로 호출되는 반면에
// ❗❗ function 컴포넌트는 props나 state가 변경되면 전체가 반복되어짐 ❗❗
//     -> 계속해서 새로운 것들을 만들고 새롭게 값을 계산, 모든 로직들이 다시 수행됨
const SimpleHabit = (props) => {
    // 실제 count값, count를 업데이트 할 수 있는 setCount를 return
    const [count, setCount] = useState(0); // useState를 계속 호출해도 컴포넌트에 연결된 state는 따로 저장되어져 있어 0으로 초기화 X
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted & updated ${count}`);
    }, [count]);

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;

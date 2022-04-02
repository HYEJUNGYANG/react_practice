import React from 'react';
import './app.css';

function App() {
    const name = undefined;
    // class="" (x) -> className =""
    // onclick="" (x) -> onClick (대문자)
    return (
        // 형제 노드가 있을 때는 묶어줘야 함
        // <></> 아무것도 작성하지 않아도 React.Fragment를 작성한 것과 동일
        <React.Fragment>
            <h1>Hello</h1>
            {name && <h1>Hello {name} :)</h1>}
            {['💕', '🍎'].map((item) => (
                <h1>{item}</h1>
            ))}
        </React.Fragment>
    );
}

export default App;

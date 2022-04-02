import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
    // <React.StrictMode></React.StrictMode> -> 생략 가능
    //   -> 엄격모드
    // app.jsx에 정의된 컴포넌트
    <React.StrictMode>
        {/* <App /> */}
        <SimpleHabit />
    </React.StrictMode>,
    document.getElementById('root') // index.html에 있는 id='root'인 div에 연결
);

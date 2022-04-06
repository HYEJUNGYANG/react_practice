import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import { Link } from 'react-router-dom';

// 기존 HTML에서 링크를 쓰면 전체적인 HTML의 페이지가 다른 HTML로 교체되는 반면에
// 리액트 라우팅을 이용하면 기존의 페이지는 그대로 유지한 상태에서
// 싱글페이지 어플리케이션에서 제공하는 장점을 그대로 유지하면서 라우팅이 가능 => 성능에 좋음 ✨
function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Switch>
                <Route path={['/', '/home']} exact>
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

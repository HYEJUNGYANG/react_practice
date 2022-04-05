import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
    // 컴포넌트 안에서 네트워크 처리를 하는 것은 좋지 않음 💩
    // 키같은 credential은 절대 코드에 남겨두면 안됨 💩
    const [videos, setVideos] = useState([]);
    const search = (query) => {
        youtube
            .search(query) //
            .then((videos) => setVideos(videos));
    };

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
    }, []);
    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoList videos={videos} />
        </div>
    );
}

export default App;

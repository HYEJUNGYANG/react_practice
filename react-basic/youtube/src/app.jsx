import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
    // 컴포넌트 안에서 네트워크 처리를 하는 것은 좋지 않음 💩
    // 키같은 credential은 절대 코드에 남겨두면 안됨 💩
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };

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
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        onVideoClick={selectVideo}
                        display={selectedVideo ? 'list' : 'grid'}
                    />
                </div>
            </section>
        </div>
    );
}

export default App;

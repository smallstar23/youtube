import React, { useEffect, useState, useCallback } from "react";
import styles from './app.module.css'
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo]= useState(null);

  const selectVideo= video =>{
    setSelectedVideo(video);
  }

  // 검색은 search 가 들어갈때만 callback 함수를 불러줌
  const search = useCallback(
    query =>{
      // 검색값이 들어갈 경우 기존값 null로 만들어줌
      setSelectedVideo(null)
      youtube.search(query).then(videos=> setVideos(videos))
    },
    // 특정 배열을 넣어주면 배열이 바뀔때만 갱신이 일어남
    [youtube]
  );

  //
  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [])


  return (
    <div className={styles.app}>
      <SearchHeader/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;

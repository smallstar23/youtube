import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube'
import axios from 'axios';

// axios 로 통신을 연결할 변수
const httpClient= axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params:{ key: process.env.REACT_APP_YOUTUBE_API_KEY}  
  // 유지보수를 위해 별도로 파일을 만들어 관리함  env 파일 작성
  //process 객체는 따로 만들지 않아도 항상 존재하는 객체임
})

const youtube= new Youtube(httpClient);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>
);

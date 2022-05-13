import React, {useRef} from 'react';
import styles from './search_header.module.css';

// app 에서 onsearch 함수를 받아옴
const SearchHeader= ({onSearch}) =>{
    const inputRef=useRef();
    const handleSearch= () => {
        const value = inputRef.current.value;
        // ref가 가리키는 값을 onSeach 함수에 전달할거임
        onSearch(value);
    }

    const onClick= () =>{
        handleSearch();
    }

    const onKeyPress= event =>{
        if(event.key === "Enter"){
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="./imgs/youtube_icon.png" alt="logo"/>
                <h1 className={styles.title}>MyYoutubeSite</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder='검색어를 입력하세요...' onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="./imgs/search_icon.png" alt="검색"/>
            </button>
        </header>
    )
}

export default SearchHeader;
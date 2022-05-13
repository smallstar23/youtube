import styles from './search_header.module.css';

const SearchHeader= () =>{

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="./imgs/youtube_icon.png" alt="logo"/>
                <h1 className={styles.title}>MyYoutubeSite</h1>
            </div>
            <input className={styles.input} type="search" placeholder='검색어를 입력하세요...'/>
            <button className={styles.button} type="submit">
                <img className={styles.buttonImg} src="./imgs/search_icon.png" alt="검색"/>
            </button>
        </header>
    )
}

export default SearchHeader;
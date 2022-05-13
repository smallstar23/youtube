// 통신을 담당할 js파일

class Youtube {
    constructor(httpClient){
        this.youtube = httpClient;
    }
    // 여러 요청이 들어와도 하나하나 동기식으로 처리됨
    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params:{
                part: 'snippet',
                chart: 'mostPopular',
                maxResult: 20
            },
        })

        return response.data.items;
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params:{
                part: 'snippet',
                type: 'video',
                maxResult: 20,
                q: query
            },
        })

        return response.data.items.map(item => ({...item, id:item.id.videoId}));
    }
}

export default Youtube;
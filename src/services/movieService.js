import config from "../config";

const movieService = {

    getTrending: () => {

    },

    getSearch: () => {

    },

    getDetail: () => {

    },


    getVideos: () => {

    },

    getNowPlaying: (page) => {
        return config.get(`/movie/now_playing?language=en-US&page=${page}`);
    },

    getPopular: () => {

    },



};
export default movieService;

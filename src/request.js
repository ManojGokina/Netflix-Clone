// const API_KEY= '0fc36919fff2603ac5d92fb95863f537';
// const BASE_URL = 'https://api.themoviedb.org/3';
const origialsAPI = `https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537`;
const trendingAPI = `https://api.themoviedb.org/3/trending/all/week?api_key=0fc36919fff2603ac5d92fb95863f537`;
const topRatedAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=0fc36919fff2603ac5d92fb95863f537`;
const actionMoviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=28`;
const comedyMoviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=35`;
const horrorMoviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=37`;
const romanceMoviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=10749`;
const documentriesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=99`;
const requests = {
    fetchTrending: trendingAPI,
    fetchOriginals: origialsAPI,
    fetchTopRated: topRatedAPI,
    fetchAction:actionMoviesAPI,
    fetchComedy:comedyMoviesAPI,
    fetchHorror:horrorMoviesAPI,
    fetchRomance:romanceMoviesAPI,
    fetchDocumentries:documentriesAPI

}


export default requests;    





// const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}`;
// const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=Dune`;
// const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Dune`;


export const fetchMoviesByYear = async (year) => {
    try {
        const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
        const API_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc`;
        const response = await fetch(`${API_ENDPOINT}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch data:", error);
        throw error;
    }
};

export const fetchMoviesById = async (id) => {
    try {
        const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
        const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(`${API_ENDPOINT}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch data:", error);
        throw error;
    }
};
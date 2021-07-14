export const REQUEST_TOP_MOVIES = "REQUEST_TOP_MOVIES"
export const RECIEVE_TOP_MOVIES = "RECIEVE_TOP_MOVIES"

export const requestTopMovies = () => ({type:REQUEST_TOP_MOVIES})
export const recieveTopMovies = data => ({type:RECIEVE_TOP_MOVIES,data})
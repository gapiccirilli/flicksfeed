import { createContext, useReducer } from "react";

export const ReviewContext = createContext();

function reducer(state, action) {
    switch(action.type) {
        case "review/setMovie":
            return { ...state, movieImg: action.payload.movieImg, movieData: action.payload.movieData, 
                synopsis: action.payload.synopsis};
        case "review/search":
            return { ...state, searchQuery: action.payload};
        case "review/rate":
            return { ...state, rating: action.payload.rating, ratingClickCount: action.payload.ratingClickCount};
        case "review/post":
            return { ...state, reviewPost: action.payload};
        case "review/cancel":
            return { ...state, movieImg: "", movieData: {}, synopsis: "", searchQuery: "", rating: 0, ratingClickCount: 0, 
            reviewPost: ""};
        default:
            return state;
    }
}

export function ReviewProvider({ children }) {

    const initialState = {
        movieImg: "",
        movieData: {},
        synopsis: "",
        searchQuery: "",
        rating: 0,
        ratingClickCount: 0,
        reviewPost: "",
    };

    const [reviewState, dispatch] = useReducer(reducer, initialState);

    function setMovie(movie) {
        dispatch({type: "review/setMovie", payload: {movieImg: movie.image, movieData: movie.data, synopsis: movie.synopsis}});
    }

    function search(query) {
        dispatch({type: "review/search", payload: query});
    }

    function rate(rating) {
        dispatch({type: "review/rate", payload: {rating: rating.rating, ratingClickCount: rating.ratingClickCount}});
    }

    function post(reviewPost) {
        dispatch({type: "review/post", payload: reviewPost})
    }

    function cancel() {
        dispatch({type: "review/cancel"});
    }
    return (
        <ReviewContext.Provider value={{reviewState, setMovie, search, rate, post, cancel}}>
            {children}
        </ReviewContext.Provider>
    );
}
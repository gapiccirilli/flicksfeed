import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "review/setMovie":
            return { ...state, movieImg: action.payload.movieImg, movieData: action.payload.movieData, 
                synopsis: action.payload.synopsis, mediaIsSelected: true};
        case "review/search":
            return { ...state, searchQuery: action.payload};
        case "review/rate":
            return { ...state, rating: action.payload.rating, ratingClickCount: action.payload.ratingClickCount};
        case "review/post":
            return { ...state, reviewPost: action.payload};
        case "review/cancel":
            return { ...state, movieImg: "", movieData: {}, synopsis: "", searchQuery: "", rating: 0, ratingClickCount: 0, 
            reviewPost: "", mediaIsSelected: false};
        default:
            return state;
    }
}

export function useReview() {

    const initialState = {
        movieImg: "",
        movieData: {},
        synopsis: "",
        searchQuery: "",
        rating: 0,
        ratingClickCount: 0,
        reviewPost: "",
        mediaIsSelected: false
    };

    return useReducer(reducer, initialState);
}
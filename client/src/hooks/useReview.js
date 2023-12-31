import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "review/setMovie":
            return { ...state, movieData: action.payload,  mediaIsSelected: true};
        case "review/search":
            return { ...state, searchQuery: action.payload};
        case "review/rate":
            return { ...state, rating: action.payload.rating, ratingClickCount: action.payload.ratingClickCount};
        case "review/post":
            return { ...state, reviewPost: action.payload};
        case "review/cancel":
            return { ...state, movieData: [], synopsis: "", searchQuery: "", rating: 0, ratingClickCount: 0, 
            reviewPost: "", mediaIsSelected: false};
        default:
            return state;
    }
}

export function useReview() {

    const initialState = {
        movieData: [],
        synopsis: "",
        searchQuery: "",
        rating: 0,
        ratingClickCount: 0,
        reviewPost: "",
        mediaIsSelected: false
    };

    return useReducer(reducer, initialState);
}
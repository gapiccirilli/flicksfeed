import { createContext, useReducer } from "react";

export const ReviewContext = createContext();

function reducer(state, action) {
    switch(action.type) {
        case "review/setMovie":
            return { ...state, movie: action.payload };
        case "review/post":
            if (state.posts) {
                return { ...state, posts: [...state.posts, { movie: state.movie, 
                    rating: action.payload.rating, 
                    text: action.payload.text}] };
            } else {
                return { ...state, posts: [{ movie: state.movie, 
                    rating: action.payload.rating, 
                    text: action.payload.text}] };
                }
        case "review/cancel":
            return { ...state, movie: {} };
        default:
            return state;
    }
}

export function ReviewProvider({ children }) {

    const initialState = {
       movie: {},
       posts: [],
    };

    const [reviewState, dispatch] = useReducer(reducer, initialState);

    function setMovie(movie) {
        dispatch({type: "review/setMovie", payload: movie});
    }

    function post(reviewPost) {
        dispatch({type: "review/post", payload: reviewPost});
    }

    function cancel() {
        dispatch({type: "review/cancel"});
    }

    return (
        <ReviewContext.Provider value={{reviewState, setMovie, post, cancel}}>
            {children}
        </ReviewContext.Provider>
    );
}
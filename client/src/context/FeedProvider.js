import { createContext, useReducer } from "react";

export const FeedContext = createContext();

function reducer(state, action) {
    switch(action.type) {
        case "setPosts":
            return { ...state, posts: action.payload};
        case "setComments":
            return { ...state, comments: action.payload};
        case "setShowComments":
            return { ...state, showComments: action.payload};
        default:
            return state;
    }
}

export default function FeedProvider({ children }) {
    const initialState = {
        posts: [],
        comments: [],
        showComments: false,
    };

    const [feedState, dispatch] = useReducer(reducer, initialState);
    
    return (
        <FeedContext.Provider value={{feedState, dispatch}}>
            {children}
        </FeedContext.Provider>
    );
}
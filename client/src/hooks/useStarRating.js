import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "hover":
            return { ...state, hoverState: action.payload};
        case "hoverOff":
            return { ...state, hoverState: 0};
        case "click":
            return { ...state, clickState: action.payload};
        default:
            return state;
    }
}

export function useStarRating() {

    const initialState = { 
        hoverState: 0,
        clickState: 0
    };

    return useReducer(reducer, initialState);
}
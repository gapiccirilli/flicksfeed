import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case "noRating":
            return { oneStar: "star", twoStar: "star", threeStar: "star", fourStar: "star", fiveStar: "star" };
        case "oneStar":
            return { oneStar: "starFill", twoStar: "star", threeStar: "star", fourStar: "star", fiveStar: "star" };
        case "twoStar":
            return { oneStar: "starFill", twoStar: "starFill", threeStar: "star", fourStar: "star", fiveStar: "star" };
        case "threeStar":
            return { oneStar: "starFill", twoStar: "starFill", threeStar: "starFill", fourStar: "star", fiveStar: "star" };
        case "fourStar":
            return { oneStar: "starFill", twoStar: "starFill", threeStar: "starFill", fourStar: "starFill", fiveStar: "star" };
        case "fiveStar":
            return { oneStar: "starFill", twoStar: "starFill", threeStar: "starFill", fourStar: "starFill", fiveStar: "starFill" };
        default:
            return {...state};
    }
}

export function useStarRating() {
    const initialState = {
        oneStar: "star",
        twoStar: "star",
        threeStar: "star",
        fourStar: "star",
        fiveStar: "star"
    };

    return useReducer(reducer, initialState);
}
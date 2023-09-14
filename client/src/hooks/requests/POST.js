import { protocol, domain } from "./http.dev.constants";


async function createPost(post) {
    // try {
    //     const response = await fetch(`${protocol}${domain}/posts`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json"},
    //         body: post,
    //     });
        
    //     if (!response.ok) {
    //         const error = response.json();
    //         throw new Error(error.errorMessage);
    //     }

    //     const returnedPost = response.json();
    //     return returnedPost;

    // } catch(error) {
    //     return error.message;
    // }

    // ↓ delete these lines ↓ and uncomment the above code when api exists
    console.log(post);
    return post;
}

export { createPost };
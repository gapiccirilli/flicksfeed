

async function getMovieById(movieId, callbacks, inputElement) {
    const { setMovie, setShowMedia, closeCallBack } = callbacks;
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=367fae11&i=${movieId}&plot=full`);
        
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovie(data);
        }
        setShowMedia(true);
        closeCallBack(false);
        inputElement.current.value = "";
      } catch(error) {
        console.log(error.message);
      }
}

async function getMovies(event, setMovies) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=367fae11&s=${event.target.value}`);
        
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
  
        const data = await response.json();
  
        if (data.Response === "True") {
          setMovies(data.Search);
        }
  
      } catch(error) {
  
      }
}

export { getMovieById ,getMovies };
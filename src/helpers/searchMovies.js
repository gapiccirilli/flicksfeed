

export async function searchMovies(event, setMovies) {
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
import styles from './styles/MediaData.module.css';

export default function MediaData({ data }) {
  let ratingType;
  let rating;

  if (data.Type === "movie") {
    if (data.Ratings[1] !== undefined) {
      ratingType = data.Ratings[1].Source;
      rating = data.Ratings[1].Value;
    } else {
      ratingType = "IMDB";
      rating = data.Ratings[0].Value;
    }
  } else if (data.Type === "series") {
    ratingType = "IMDB";
    rating = data.Ratings[0].Value;
  }

  return (
    <div className={styles.mediaData}>
      <img src={data.Poster} alt={data.Title} style={{width: "7rem", height: "9rem"}} />
      <div className={styles.text}>
        <h3>{data.Title}</h3>
        <p><span>Genre: </span><span>{data.Genre}</span></p>
        <p><span>Director: </span><span>{data.Director}</span></p>
        <p><span>Rated: </span><span>{data.Rated}</span></p>
        <p><span>Released: </span><span>{data.Released}</span></p>
        <p><span>{ratingType}: </span><span>{rating}</span></p>
      </div>
    </div>
  );
}
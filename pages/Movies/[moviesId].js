import style from "./styles.module.css";
function MoviesDetail({ movieData }) {
  console.log(movieData);

  return (
    <div className={style.details}>
      <div className={style.detailsContainer}>
        <div className={style.detailsLeft}></div>
        <div className={style.detailsImage}>
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movieData?.backdrop_path}`}
          />
        </div>
        <div className={style.detailsRight}>
          <div className={style.detailsTitle}>
            <h2>{movieData?.title}</h2>
          </div>
          <div className={style.overview}>
            <p>{movieData?.overview}</p>
          </div>

          <div className={style.rating}>
            <p>
              Rating: <strong>{movieData?.vote_average?.toFixed(1)}</strong>
            </p>
          </div>
          <div className={style.date}>
            <h3>Release Date:</h3>
            <p>{movieData?.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.moviesId}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
  );
  const movieData = await res.json();
  return {
    props: {
      movieData,
    },
  };
};

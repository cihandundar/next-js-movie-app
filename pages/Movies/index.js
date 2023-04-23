import Link from "next/link";
import style from "./styles.module.css";
function Movies({ movies }) {
  return (
    <section className={style.section}>
      <div className={style.movieTitle}>
        <h2>Movies</h2>
      </div>
      <div className={style.cardContainer}>
        {movies?.results?.map((item) => {
          return (
            <div key={item.id} className={style.card}>
              <Link href={`Movies/${item.id}`}>
                <div className={style.cardImage}>
                  <img
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${item.backdrop_path}`}
                  />
                </div>
                <div className={style.cardTitle}>
                  <p>{item?.title}</p>
                </div>
                <span className={style.blur}></span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Movies;

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page`
  );
  const data = await response.json();
  return {
    props: {
      movies: data,
    },
  };
}

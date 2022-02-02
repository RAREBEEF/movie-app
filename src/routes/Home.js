import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from "./Home.module.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=rating`
      )
    ).json();

    ReactDOM.unstable_batchedUpdates(() => {
      setMovies(json.data.movies);
      setLoading(false);
      console.log("api loaded");
    });
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className={styles.title}>Movie List</h1>
          <hr />
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title_long}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

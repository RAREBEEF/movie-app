import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.scss";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div className={styles.container}>
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        <h2 className={styles.title}>{title}</h2>
        <img
          className={styles.poster}
          src={coverImage}
          alt={`${title} poster`}
        />
      </Link>
      <ul className={styles.genres}>
        {genres && genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;

import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./Detail.module.scss";
import Loading from "../components/Loading";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDtails] = useState([]);

  const getDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    ReactDOM.unstable_batchedUpdates(() => {
      setDtails(json.data.movie);
      setLoading(false);
    });
  }, [id]);
  console.log(details);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{details.title_long}</h1>
          <hr />
          <Link
            to={`/`}
            style={{
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <div className={styles.homebtn}>↤ Home</div>
          </Link>
          <img
            className={styles.poster}
            src={details.large_cover_image}
            alt="poster"
          />
          <div className={styles.inform}>
            ★ {details.rating} |{" "}
            {details.genres.map((g) => (
              <span key={g}>{g} </span>
            ))}
            | {`${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`}
          </div>
          <p className={styles.summary}>{details.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;

//

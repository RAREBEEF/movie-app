import styles from "./Loading.module.scss";

function Loading() {
  return (
    <h1 className={styles.loading}>
      <div className={styles["outer-circle"]}></div>
      <div className={styles["inner-circle"]}></div>
    </h1>
  );
}
export default Loading;

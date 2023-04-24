import styles from "./TechItem.module.scss";

const TechItem = (props) => {
  return (
    <div className={styles["item"]}>
      <span className={styles["symbol"]}></span>
      <span className={styles["title"]}>{props.title}</span>
    </div>
  );
};

export default TechItem;

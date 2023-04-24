import styles from "./WorkItem.module.scss";
import Image from "next/image";

const WorkItem = (props) => {
  return (
    <div className={styles["item"]}>
      <div>
        <div>
          <Image
            src={`${props.imageUrl}`}
            alt="Project Thumbnail"
            height={200}
            width={300}
          />
        </div>
        <h3 className={styles["header"]}>{props.title}</h3>
        <p className={styles["description"]}>{props.description}</p>
        <p className={styles["tech"]}>{props.tech}</p>
      </div>
      <div className={styles["actions"]}>
        <div className={styles["btn-visit"]}>
          <a href={props.link} target="_blank">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;

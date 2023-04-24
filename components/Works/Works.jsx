import styles from "./Works.module.scss";
import WorkItem from "../Home/Work/WorkItem/WorkItem";

const Works = (props) => {
  return (
    <div className={styles["work"]}>
      <div className={styles["header"]}>
        <span>Some Things I have built</span>
      </div>
      <div className={styles["projects"]}>
        <div className={styles["grid"]}>
          <WorkItem
            title="Aries Fab"
            url="/works/ariesfab"
            imageUrl="/images/ariesfab.jpg"
            link="https://www.ariesfab.com/"
            description="
            Ariesfab is a business portfolio website for an Delhi based Architect Firm. Through this website they want to showcase thier works and make thier online presence."
          />
          <WorkItem
            title="Porhapati"
            imageUrl="/images/porhapati.png"
            link="https://www.porhapati.com/"
            description="Porhapati is an ed-tech startup based in Guwahati, Assam. Through this platform they offer online computer based MCQ type mock test for various examinations."
          />
          <WorkItem
            title="Bihung"
            imageUrl="/images/bihung.jpg"
            link="https://bihung.org/"
            description="Bihung is an online bodo to english dictionary and Language translation website."
          />
        </div>
      </div>
    </div>
  );
};

export default Works;

import styles from "./Work.module.scss";
import WorkItem from "./WorkItem/WorkItem";
import { motion } from "framer-motion";

const Work = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={styles["work"]}
    >
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
            tech="NextJs SCSS"
            description="
            Ariesfab is a business portfolio website for an Delhi based Architect Firm. Through this website they want to showcase thier works and make thier online presence."
          />
          <WorkItem
            title="Porhapati"
            imageUrl="/images/porhapati.png"
            link="https://www.porhapati.com/"
            tech="NextJs SCSS NodeJs MySQL Firebase"
            description="Porhapati is an ed-tech startup based in Guwahati, Assam. Through this platform they offer online computer based MCQ type mock test for various examinations."
          />
          <WorkItem
            title="Bihung"
            imageUrl="/images/bihung.jpg"
            link="https://bihung.org/"
            tech="NodeJS PUG CSS Firebase"
            description="Bihung is an online bodo to english dictionary and Language translation website."
          />
          <WorkItem
            title="Idoofy"
            imageUrl="/images/idoofy.png"
            link="https://bihung.org/"
            tech="Android Java Firebase"
            description="Idoofy is online food ordering app for a restaurant in Tezpur Assam."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

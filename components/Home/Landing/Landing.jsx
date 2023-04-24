import styles from "./Landing.module.scss";
import { TypeAnimation } from "react-type-animation";

const Landing = (props) => {
  return (
    <div className={styles["landing"]}>
      <div className={styles["contents"]}>
        <div className={styles["line1"]}>Hi, I am Pranjal Das</div>
        <h1 className={styles["line2"]}>
          <span>I am</span>&nbsp;
          <span className={styles["item"]}>
            <TypeAnimation
              sequence={[
                "Web Developer.", // Types 'One'
                2000, // Waits 1s
                "App Developer.", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "UI/UX Designer.",
                3000, // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h1>
        <h1 className={styles["line3"]}>I Build Things for the web.</h1>
        <div className={styles["btn-cta"]}>See My Works</div>
      </div>
    </div>
  );
};

export default Landing;

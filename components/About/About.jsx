import styles from "./About.module.scss";
import TechItem from "../Home/About/TechItem/TechItem";
import Image from "next/image";

const About = (props) => {
  return (
    <div className={styles["about"]}>
      <div className={styles["header"]}>About Me</div>
      <div className={styles["contents"]}>
        <div className={styles["left"]}>
          <p>
            Hello, my name is Pranjal Das. I am a Fullstack software developer
            based in Guwahati, Assam, India with over 4 years Professional of
            experience in designing, developing, and implementing software
            solutions.
          </p>
          <p>
            I enjoy programming and creating software solutions. My interest for
            programming and web development started in my school days. So, when
            it comes to my higher education I choose Master of Computer
            Applications.
          </p>
          <p>
            Outside of work, I enjoy Reading, Gardening, Playing Cricket &
            Chess.
          </p>
          <p>Here are few Technologies I have been working with recently</p>
          <div className={styles["tech"]}>
            <div className={styles["box"]}>
              <TechItem title="HTML" />
              <TechItem title="CSS" />
            </div>
            <div className={styles["box"]}>
              <TechItem title="JavaScript" />
              <TechItem title="React" />
            </div>
            <div className={styles["box"]}>
              <TechItem title="NextJs" />
              <TechItem title="NodeJs" />
            </div>
            <div className={styles["box"]}>
              <TechItem title="Firebase" />
              <TechItem title="MySQL" />
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["boxes"]}>
            <div className={styles["image-box"]}>
              <Image src="/images/me.png" fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles["box"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

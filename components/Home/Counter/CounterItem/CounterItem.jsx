import styles from "./CounterItem.module.scss";
import CountUp from "react-countup";
import Image from "next/image";

const CounterItem = (props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <Image
          src={props.icon}
          fill
          style={{ objectFit: "contain" }}
          alt="Icon for Numbers"
        />
      </div>
      <div>
        <CountUp
          start={0}
          end={props.header}
          delay={props.delay}
          enableScrollSpy
        >
          {({ countUpRef }) => (
            <div className={styles["header-box"]}>
              <span className={styles["header"]} ref={countUpRef}>
                {props.header}
              </span>
              <span>+</span>
            </div>
          )}
        </CountUp>
      </div>
      <span className={styles["description"]}>{props.description}</span>
    </div>
  );
};

export default CounterItem;

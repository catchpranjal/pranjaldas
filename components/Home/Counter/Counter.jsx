import styles from "./Counter.module.scss";
import CounterItem from "./CounterItem/CounterItem";
import { motion } from "framer-motion";

const Counter = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={styles["counter"]}
    >
      <CounterItem
        header="4"
        description="Years of Experience"
        icon="/images/experience.png"
        delay={2}
      />
      <CounterItem
        header="50"
        description="Projects Completed"
        icon="/images/project.png"
        delay={5}
      />
      <CounterItem
        header="25"
        description="Happy Clients"
        icon="/images/customer-review.png"
        delay={3}
      />
      <div className={styles["glass"]}></div>
    </motion.div>
  );
};

export default Counter;

import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["divider"]}>
        <hr />
      </div>
      <div className={styles["copy"]}>Design & Developed by Pranjal Das</div>
    </div>
  );
};

export default Footer;

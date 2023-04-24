import styles from "./SideNav.module.scss";
import NavLink from "next/link";

const SideNav = (props) => {
  return (
    <div className={styles["sidenav"]}>
      <div className={styles["menu"]}>
        <ul className={styles["menu-items"]}>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="/works">Works</NavLink>
          </li>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="/about">About</NavLink>
          </li>
          <li className={styles["menu-item"]}>
            <div className={styles["actions"]}>
              <a href="/Resume.pdf" target="_blank">
                <span
                  className={styles["btn-resume"]}
                  onClick={props.onCloseDrawer}
                >
                  Resume
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

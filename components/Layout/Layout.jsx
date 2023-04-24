import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className={styles["layout"]}>
      <nav>
        <Navbar />
      </nav>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

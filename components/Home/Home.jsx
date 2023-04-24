import styles from "./Home.module.scss";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Work from "./Work/Work";

const Home = (props) => {
  return (
    <>
      <Landing />
      <About />
      <Work />
    </>
  );
};

export default Home;

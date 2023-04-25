import styles from "./Home.module.scss";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Work from "./Work/Work";
import Counter from "./Counter/Counter";

const Home = (props) => {
  return (
    <>
      <Landing />
      <About />
      <Work />
      <Counter />
    </>
  );
};

export default Home;

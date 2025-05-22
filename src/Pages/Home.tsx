import { Hero } from "../Components";
import About from "../Components/About";
import Contact from "../Components/Contact";
import MoreAboutMe from "../Components/MoreAboutMe";
import Uses from "../Components/Uses";
import Work from "../Components/Work";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Uses />
      <MoreAboutMe />
      <Work />
      <Contact />
    </>
  );
};

export default Home;

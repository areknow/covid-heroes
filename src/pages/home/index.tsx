import { Provider } from 'context';
import Cause from './sections/cause';
import Contact from './sections/contact';
import Donate from './sections/donate';
import Footer from './sections/footer';
import Hero from './sections/hero';
import Need from './sections/need';

const Home = () => {
  return (
    <Provider>
      <Hero />
      <Cause />
      <Need />
      <Donate />
      <Contact />
      <Footer />
    </Provider>
  );
};
export default Home;

import Hero from './sections/hero';
import Cause from './sections/cause';
import Need from './sections/need';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Donate from './sections/donate';
import { Provider } from './context';

const App = () => {
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

export default App;

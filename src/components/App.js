import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Layout from './Layout';
import Contact from '../routes/Contact';
import SEO from "../routes/SEO"
import Solar from "../routes/Solar"
import Led from "../routes/Led"
import Chemical from '../routes/Chemical';
import Brands from '../routes/Brands';
import Electrical from '../routes/Electrical';
import Leadership from "../routes/Leadership"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brands/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<p>Not found!</p>} />
          <Route path="seo" element={<SEO/>} />
          <Route path='electrical-&-mechanical-fitments' element={<Electrical/>}/>
          <Route path='solar-power-products' element={<Solar/>}/>
          <Route path='LED-Lighting' element={<Led/>}/>
          <Route path='speciality-chemicals' element={<Chemical/>}/>
          <Route path="our-leadership" element={<Leadership/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

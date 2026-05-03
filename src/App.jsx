import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import StickerDetail from './pages/StickerDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import CustomOrder from './pages/CustomOrder';

export default function App() {
  return (
    <BrowserRouter basename="/dailodoodles">
      <Navbar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/shop" element={<Gallery />} />
          <Route path="/sticker/:id" element={<StickerDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/shipping" element={<Shipping />} /> */}
          {/* <Route path="/custom-order" element={<CustomOrder />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

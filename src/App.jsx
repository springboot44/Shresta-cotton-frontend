import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/DashBoard';
import ProtectedRoute from './components/ProtectedRoute';
import CottonList from './components/CottonList';
import CottonListDay from './components/CottonListDay';
import AddCotton from './components/AddCotton';

function App() {
  const location = useLocation();
  
  // Define routes where navbar should be hidden
  const protectedRoutes = ['/dashboard', '/addcotton'];
  const shouldShowNavbar = !protectedRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cottonday" element={<CottonListDay />} />
        <Route path="/cottonlist" element={<CottonList />} />

        {/* Protected routes without navbar */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/addcotton"
          element={
            <ProtectedRoute>
              <AddCotton />
            </ProtectedRoute>
          }
        />
      </Routes>
      {shouldShowNavbar && <Footer />}
    </>
  );
}

export default App;
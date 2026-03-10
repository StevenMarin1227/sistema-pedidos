import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogoPage from "./pages/CatalogoPage";
import PedidoPage from "./pages/PedidoPage";
import ConfirmacionPage from "./pages/ConfirmacionPage";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<CatalogoPage />} />
            <Route path="/pedido" element={<PedidoPage />} />
            <Route path="/confirmacion" element={<ConfirmacionPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
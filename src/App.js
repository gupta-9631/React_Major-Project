import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/list/:id" element={<ProductList />} />
          <Route path="/product/:id/register" element={<Form />} />
          <Route path="/product/:id/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


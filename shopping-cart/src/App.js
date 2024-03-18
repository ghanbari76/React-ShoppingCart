import { Route,Routes,Navigate } from "react-router-dom"

import './App.css';

//Components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/cart"  element={<ShopCart />} />
            <Route path="/products/:id"  element={<ProductDetails />} />
            <Route path="/products"  element={<Store />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signup"  element={<SignUp />} />
            <Route path="/*"  element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;

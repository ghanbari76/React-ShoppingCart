import { Route,Switch,Redirect } from "react-router-dom"

import './App.css';

//Components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;

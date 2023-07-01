import { Route,Switch,Redirect } from "react-router-dom"

import './App.css';

//Components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";

//Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </ProductContextProvider>
    </div>
  );
}

export default App;

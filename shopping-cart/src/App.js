import './App.css';

//Components
import Store from './components/Store';

//Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>
    </div>
  );
}

export default App;

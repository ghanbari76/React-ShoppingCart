import './App.css';
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductContextProvider />
    </div>
  );
}

export default App;

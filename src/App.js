import './App.css';
import Products from './Compons/Products';
import ToDo from './Compons/Todo';
import Piroduct from './Compons/Piroduct';
import Validation from './Compons/Validation';
import MyCounter from './Compons/Counter';
import MyComment from './Compons/Comment';
import Withloading from './Compons/Withloading';
function App() {
  return (
    <div className="App">
      <h1>Latest Products</h1>
        <Products/>
        <ToDo/>
        <Piroduct/>
        <Validation/>
        <MyCounter/>
        <MyComment/>
    </div>
  );
}

export default App;

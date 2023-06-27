import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"; 

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/products/:id' element={<Product/>} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/login' element={ user ? <Navigate to="/" /> : <Login/>} />
        <Route exact path='/register' element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  
    );
};

export default App;
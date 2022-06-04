import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<Products />}/>
    </Routes>
    </div>
  );
}

export default App;

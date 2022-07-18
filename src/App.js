import React,{useState} from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProductCategories from './components/ProductCategories/ProductCategories';
import ProductPage from './components/ProductPage/ProductPage';
import SignIn from "./container/SignIn/SignIn";

function App() {
  const [productId, setProductId] = useState(0);
  const [productCategoryName, setProductCategoryName]=useState("")
  console.log("shubham",productCategoryName);
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar productCategoryName={productCategoryName} setProductCategoryName={setProductCategoryName}/> }/>
        {/* <Route path="/" element={<ProductCategories/>}/> */}
        <Route path="/products/:id" element={<ProductPage productCategoryName={productCategoryName} setProductCategoryName={setProductCategoryName} />}  />
        <Route path="/sign-in" element={<SignIn />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

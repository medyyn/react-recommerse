import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Category, Home, ProductDetails, Products,  } from "./pages";


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:productId" element={<ProductDetails/>}/>
      <Route path="/products/category/:categoryName" element={<Category/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

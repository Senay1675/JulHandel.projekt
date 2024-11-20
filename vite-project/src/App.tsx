import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App

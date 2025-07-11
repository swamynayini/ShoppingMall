import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import SignIn from './components/SignIn';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';

function App() {
  const[presentUser,setPrasentUser] = useState(null)
  useEffect(()=>{
    const authentication = onAuthStateChanged(auth,(user)=>{
      setPrasentUser(user)
    })
    return ()=> authentication()
  },[])
  return (
    <BrowserRouter>
     {presentUser && <Header setPresentUser={setPrasentUser} />}  
      <Routes>
        <Route
          path="/"
          element={
            presentUser ? (
              <Product presentUser={presentUser} />
            ) : (
              <SignIn setPresentUser={setPrasentUser} />
            )
          }
        />
        <Route
          path="/productDetails"
          element={
            presentUser ? (
              <ProductDetails />
            ) : (
          <SignIn setPresentUser={setPrasentUser} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client'
import Nav from './components/Nav';
import Product from './components/Product';
import Slide from './components/Slide'
import './App.css'

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://fakestoreapi.com/products');
			const result = await res.json();
      setInfo(result)
		}
    fetchData();
	}, []);

  return (
    <div>
      <Nav />
      <Slide />
      <Product products={info} />
    </div>
  )
}

export default App;

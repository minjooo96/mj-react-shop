import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import Product from './components/Product'
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

  // const [thema, setThema] = useState([]);
  // console.log(document.querySelector('html').getAttribute('data-thema'));
  
  // thema = document.querySelector('html').getAttribute('data-thema');

  return (
    <div>
      <Nav />
      <Product products={info} />
    </div>
  )
}

export default App;

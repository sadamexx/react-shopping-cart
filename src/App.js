import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { CartContext } from "./contexts/CartContext";
import { ProductsContext } from "./contexts/ProductsContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const deleteItem = id => {
		setCart(cart.filter(item => {
			return item.id !== id
		}))
	};

	return (
		<div className="App">
			<ProductsContext.Provider value={{products, addItem}}>
				<CartContext.Provider value ={{cart, deleteItem}}>

					<Navigation cart={cart} />			

					<Route exact path="/" component= {Products} />

					<Route path = "/cart" component = {ShoppingCart} />
					
				</CartContext.Provider>
			</ProductsContext.Provider>
		</div>
	);
}

export default App;

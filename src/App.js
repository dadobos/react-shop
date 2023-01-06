import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ToastContainer />
				<Navbar />
				<Routes>
					<Route path='cart' exact element={<Cart />} />
					<Route path='/' exact element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;

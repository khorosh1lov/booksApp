import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { SearchContext, ThemeContext } from '../../context';

import About from '../About/About';
import BookDetails from '../BooksList/BookDetails/BookDetails';
import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';

function App() {
 	const [search, setSearch] = useState('');
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}
  
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<SearchContext.Provider value={{ search, setSearch }}>
				<Router>
					<div className="app">
						<Header setSearch={setSearch} />

						<Routes>
							<Route path="/" element={<BooksList />}></Route>
							<Route path="/book/:bookId" element={<BookDetails />}></Route>

							<Route path="/about" element={<About />} />

							<Route path="*" element={<Navigate to="/404" />} />
							<Route path="/404" element={<NotFound />} />
						</Routes>
					</div>
				</Router>
			</SearchContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;

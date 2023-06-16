import './App.scss';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { SearchContext, ThemeContext } from '../../context';

import About from '../About/About';
import BookDetails from '../BooksList/BookDetails/BookDetails';
import BooksList from '../BooksList/BooksList';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import { useLocation } from 'react-router-dom';

function RoutesWithHistory() {
	const location = useLocation();
	const previousLocation = useRef(location);

	useEffect(() => {
		if (location !== previousLocation.current) {
			previousLocation.current = location;
		}
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<BooksList />}></Route>
			<Route path="/book" element={<Navigate to="/" />} />
			<Route path="/book/:bookId" element={<BookDetails />}></Route>

			<Route path="/about" element={<About />} />

			<Route path="*" element={<Navigate to="/404" />} />
			<Route path="/404" element={<NotFound />} />
		</Routes>
	);
}

function App() {
 	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState({});
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}
  
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<SearchContext.Provider value={{ search, setSearch, filters, setFilters }}>
				<Router>
					<div className="app">
						<Header setSearch={setSearch} />
						<Breadcrumbs />
						<RoutesWithHistory />
					</div>
				</Router>
			</SearchContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;

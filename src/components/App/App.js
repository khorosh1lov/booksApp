import './App.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import BookDetails from '../BooksList/BookDetails/BookDetails';
import BooksList from '../BooksList/BooksList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  
	return (
		<Router>
			<div className="app">
				<SearchBar setSearch={setSearch} />

				<Routes>
					<Route path="/" element={<BooksList search={search} />}></Route>
					<Route path="/book/:bookId" element={<BookDetails />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

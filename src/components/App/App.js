import './App.css';

import React, { useState } from 'react';

import BookDetails from '../BooksList/BookDetails/BookDetails';
import BooksList from '../BooksList/BooksList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  
	return (
		<div className="app">
			<SearchBar setSearch={setSearch} />
			<BooksList search={search} onSelectBook={setSelectedBook} />

			{selectedBook && <BookDetails bookId={selectedBook} />}
		</div>
	);
}

export default App;

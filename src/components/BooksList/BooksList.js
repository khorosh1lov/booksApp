import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import FilterBar from '../FilterBar/FilterBar';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context';
import { getBooksBySearchTerm } from '../../api/booksApi';
import slugify from 'slugify';

function BooksList() {
	const { search, filters } = useContext(SearchContext); 
    const [books, setBooks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const booksPerPage = 10;

	const handlePageChange = useCallback((pageNumber) => {
		setCurrentPage(pageNumber);
	}, []);

    useEffect(() => {
		if (search) {
			getBooksBySearchTerm(search, currentPage, booksPerPage, filters)
				.then((response) => {
					if (response.data.items) {
						setBooks(response.data.items);
					} else {
						setBooks([]);
					}
				})
				.catch((error) => console.error(error));
		}
	}, [search, currentPage, filters]);

	const memoizedBooks = useMemo(
		() =>
			books.map((book, index) => {
				const slug = `${book.id}-${slugify(book.volumeInfo.title, {
					lower: true, strict: true
				})}`;

				return (
					<li key={index}>
						<Link to={`/book/${slug}`} title={book.volumeInfo.title}>
							{book.volumeInfo.title}
						</Link>
					</li>
				);
			}),
		[books],
	);

	return (
		<div className="books">
			<div className="container">
				{search && books.length > 0 && <h1>Books</h1>}

				{search && <FilterBar />}

				<ul>{memoizedBooks}</ul>
				
				{search && books.length > 0 && (
					<>
						<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
							Previous
						</button>
						<button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
					</>
				)}
			</div>
		</div>
	);
}

export default BooksList;

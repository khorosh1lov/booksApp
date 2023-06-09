import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { SearchContext } from '../../context';
import { getBooksBySearchTerm } from '../../api/booksApi';

function BooksList() {
	const { search } = useContext(SearchContext); 
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (search) {
            getBooksBySearchTerm(search)
				.then((response) => {
					if (response.data.items) {
						setBooks(response.data.items);
					} else {
						setBooks([]);
					}
				})
				.catch((error) => console.error(error));
        }
    }, [search]);

	return (
		<div className="books">
			<div className="container">
				<h1>Books</h1>

				<ul>
					{books.map((book, index) => (
						<li key={index}>
							<Link to={`/book/${book.id}`} title={book.volumeInfo.title}>
								{book.volumeInfo.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default BooksList;

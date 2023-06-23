import { useEffect, useState } from 'react';

import { getBookById } from '../../../api/booksApi';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import withClickLogger from '../../HOC/withClickLogger';

function BookDetails({ onClick }) {
	const { slug } = useParams();
	const bookId = slug.split('-')[0];
	const [book, setBook] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		getBookById(bookId)
			.then((response) => {
				setBook(response.data);
			})
			.catch((error) => {
				console.error(error);
				setBook({});
				setError(true);
			});
	}, [bookId]);

    if (!book) {
        return <div>Loading...</div>
    }

	if (error) {
		return <div className="container">Book not found.</div>
	}

	return (
		<div className="book" onClick={() => onClick(bookId)}>
			<div className="container">
				<h1>{book.volumeInfo.title ? book.volumeInfo.title : 'No title'}</h1>
				<h2>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors'}</h2>
				<div>{book.volumeInfo.description ? parse(book.volumeInfo.description) : 'No description available'}</div>
				{book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}

				{book.volumeInfo.previewLink && (
					<a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">
						Preview Book
					</a>
				)}
			</div>
		</div>
	);
}

export default withClickLogger(BookDetails);

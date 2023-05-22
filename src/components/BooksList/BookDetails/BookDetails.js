import { useEffect, useState } from 'react';

function BookDetails({ bookId }) {
	const [book, setBook] = useState(null);

	useEffect(() => {
		fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
			.then((response) => response.json())
			.then((data) => {
				setBook(data);
			})
			.catch((error) => console.error(error));
	}, [bookId]);

    if (!book) {
        return <div>Loading...</div>
    }

	return (
		<div className="book">
			<h1>{book.volumeInfo.title}</h1>
			<h2>{book.volumeInfo.authors.join(', ')}</h2>
			<p>{book.volumeInfo.description}</p>
			<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
		</div>
	);
}

export default BookDetails;

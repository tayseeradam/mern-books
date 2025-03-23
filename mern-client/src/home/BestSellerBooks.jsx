import React, { useEffect, useState } from 'react';
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/all-books")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const contentType = res.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError("Expected JSON, but got " + contentType);
                }
                return res.json();
            })
            .then(data => setBooks(data.slice(0, 8)))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    );
};

export default BestSellerBooks;

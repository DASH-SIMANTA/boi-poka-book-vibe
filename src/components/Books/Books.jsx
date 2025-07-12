import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        // fetch('../../../public/booksData.json')
        fetch('./booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);
    return (
        <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;


/**
 * 1.state to store books
 * 2. useEffect to fetch books from API
 * 3. Display books in a list
 * 4. Add a loading state while fetching
 * 5. Add error handling for API calls
 * 6. Add a search functionality to filter books
 * 7. Add a button to sort books by title or author
 * 8. Add a button to view book details
 * 9. Add a button to add a new book
 * 10. Add a button to delete a book
 * 11. Add a button to edit a book  
 */
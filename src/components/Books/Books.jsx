import { useEffect, useState } from "react";


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
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <p>{books.length}</p>
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
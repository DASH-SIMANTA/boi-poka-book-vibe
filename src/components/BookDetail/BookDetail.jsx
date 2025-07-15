import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";
import { addToStoredWishList } from "../../utility/addToWishList";


const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    // console.log(typeof bookId, typeof data[0].bookId, typeof id);
    // Assuming data is an array of book objects
    // and each book object has a property 'bookId'
    // You can find the book with the matching bookId
    // using the find method.
    // const book = data.find(book => book.bookId === id);
    // If data is not an array, you might need to adjust this logic.
    // For example, if data is an object with bookId as keys,
    // you can access it directly like this:
    // const book = data[bookId];
    // If data is an array, you can use the find method:    
    const book = data.find(b => b.bookId === id);
    // console.log(book);
    // If book is not found, you might want to handle that case
    if (!book) {
        return <div>Book not found</div>;
    }

    const { bookId: currentBookId, bookName, image, author, tags, category, review, totalPages, yearOfPublishing, publisher, rating } = book;
    // console.log(data);
    const handleMarkAsRead =()=>{
       /**
        * 1. Understand what to store or save =>bookId
        * 2. Where to store it? => local storage/database
        * 3.array, list, collection: 
        * 4. check if already exists, do not add it again
        * 5. if not exists, add it to the list 
        * 6. if exists, show a message that it is already marked as read
        */

       addToStoredReadList(id);
       // You can also show a success message or update the UI accordingly
       console.log(`Book with ID ${id} marked as read.`);
    }

    //Handle Add to Wish List
    const handleAddToWishList = () => {
        addToStoredWishList(id);
        // Logic to add the book to the wish list
        console.log(`Book with ID ${id} added to wish list.`);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h2>By: {author}</h2>
                    <div className="divider"></div>

                    <h2> {category}</h2>
                    <div className="divider"></div>
                    <p>Review: {review}</p>
                    <br />
                    <div className="flex gap-2 mb-4">Tag:
                        {
                            tags.map((tag, index) => <button
                                key={index}

                                className="btn btn-xs bg-green-600">{tag}</button>)
                        }
                    </div>

                    <div className="divider"></div>

                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <br />
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
                    <button onClick={()=>handleAddToWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
                </div>
            </div>
        </div>

    );
};

export default BookDetail;
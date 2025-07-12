import { useParams } from "react-router-dom";

const BookDetail = () => {
    const {bookId} = useParams();
    console.log(bookId);
    return (
        <div>
            <h3>Book Details: {bookId}</h3>
        </div>
    );
};

export default BookDetail;
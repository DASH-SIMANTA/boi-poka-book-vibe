import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId,bookName, image, author, tags, category } = book;
    return (
        <div className="no-underline">
            <div className="card bg-base-100 w-96 shadow-sm p-6 bg-white-400">
                <Link to={`/books/${bookId}`}>
                    <figure className="bg-gray-100 py-8 rounded-2xl">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-[166px] "

                    />
                </figure>
                </Link>
                <div className="card-body">
                    <div className="flex justify-center gap-2 mb-4">
                        {
                            tags.map((tag,index) => <button
                            key={index}
                            
                            className="btn btn-xs bg-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="divider"></div>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-800" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="4 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
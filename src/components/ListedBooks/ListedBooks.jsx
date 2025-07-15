import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    // Ideally we will directly get the data from a database or API
    // For now, we will just create a static component to show the structure.
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        // worst way to load all books data, but for now it works.
        const storedReadListBooksInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListBooksInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListBooksInt.includes(book.bookId));
        setReadList(readBookList);
    }, []);


    const handleSort = (sortType) => {
        setSort(sortType);

        let sortedBooks = [...readList];
        if (sortType === 'Ratings') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortType === 'No of Pages') {
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortType === 'Publisher year') {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setReadList(sortedBooks);

    }


    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                    sort ? `Sort by: ${sort}` : "Sort by"
                    }</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=>handleSort('No of Pages')}><a>No of Pages</a></li>
                    <li onClick={()=>handleSort('Publisher year')}><a>Publisher year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish List Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read{readList.length}</h2>
                    <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
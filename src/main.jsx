import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
     children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader:() => fetch('/booksData.json') //Do not load all books data, just the one that matches the bookId.
      },
      {
        path:'listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json') //worst way to load all books data, but for now it works.

      },
       {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
     <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)

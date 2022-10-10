import { createBrowserRouter } from "react-router-dom";
import Roots from '../components/Roots'
import Home from '../components/Home'
import Books from '../components/Books'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import BookDetails from "../components/BookDetails";

const router = createBrowserRouter([
    {
        path: '/', element: <Roots />, children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            {
                path: '/books', element: <Books />,
                loader: () => fetch('https://api.itbook.store/1.0/new')
            },
            {
                path: '/book/:isbn', element: <BookDetails />,
                loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.isbn}`)
            },
            { path: '/about', element: <About /> },
            { path: '*', element: <ErrorPage /> },
        ]
    }
])
export default router
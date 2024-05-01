import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import { Layout } from "./Layout";
import { LandingPage } from "./pages/LandingPage";
import { SearchResults } from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/search",
        element: <SearchResults />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

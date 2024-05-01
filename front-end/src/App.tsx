import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
import { Layout } from "./Layout";
import { LandingPage } from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
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

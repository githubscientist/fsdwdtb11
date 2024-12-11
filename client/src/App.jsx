import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Hello World!</h1>
    },
    {
      path: "/contact",
      element: <h1>Contact Us</h1>
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const routes = [
    {
      path: '/',
      element: <h1>Hello World!</h1>
    },
    {
      path: "/contact",
      element: <h1>Contact Us</h1>
    }
  ];

  const router = createBrowserRouter(routes, {
    future: {
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true
    }
  });

  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />
}

export default App;
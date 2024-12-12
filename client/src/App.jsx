import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavWrapper from "./wrappers/NavWrapper";
import usersLoader from "./loaders/usersLoader";
import User from "./pages/User";
import userLoader from "./loaders/userLoader";
import Error from "./pages/Error";

const App = () => {

  const routes = [
    {
      path: "/",
      element: <NavWrapper />,
      children: [
        {
          path: '',
          element: <Home />,
          loader: usersLoader,
          hydrateFallbackElement: <div>Loading...</div>
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
      ]
    },
    {
      path: "/user/:id",
      element: <User />,
      loader: userLoader,
      hydrateFallbackElement: <div>Loading...</div>,
      errorElement: <Error />
    },
    {
      path: "*",
      element: <Error />
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
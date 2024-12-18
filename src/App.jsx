import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HeaderWrapper from "./wrappers/HeaderWrapper";
import Dashboard from "./pages/Dashboard";
import jobsLoader from "./loaders/jobsLoader";

const routes = [
  {
    path: "/",
    element: <HeaderWrapper />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: jobsLoader,
        hydrateFallbackElement: <p>Loading...</p>
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})

const App = () => {
  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
    }}
  />
}

export default App;
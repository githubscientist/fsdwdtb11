import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos from "./components/Todos";
import todosLoader from "./loaders/todosLoader";

const App = () => {

  const routes = [
    {
      path: "/",
      element: <Todos />,
      loader: todosLoader,
      hydrateFallbackElement: <p>Loading...</p>
    }
  ]

  const router = createBrowserRouter(routes, {
    future: {
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true
    }
  })

  return <RouterProvider
    router={router}
    future={{
      v7_startTransition: true
    }}
  />
}

export default App;
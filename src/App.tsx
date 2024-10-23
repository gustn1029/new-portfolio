import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import RootLayout from "./components/layouts/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Main /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

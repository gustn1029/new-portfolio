import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main/Main";
import RootLayout from "./components/layouts/RootLayout";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Main /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;

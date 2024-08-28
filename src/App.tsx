import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "@/pages/home";
import "@/App.css";
import Header from "@/components/Header";
import AddTodo from "./pages/add";
import EditTodo from "./pages/edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <main className="container flex justify-center items-center w-screen h-screen bg-secondary">
          <div className="relative bg-card shadow-md w-80 min-h-96 max-h-screen mx-auto">
            <Header />
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </main>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "add",
          element: <AddTodo />,
        },
        {
          path: "edit/:todoId",
          element: <EditTodo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

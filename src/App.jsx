// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./features/dashboard/Dashboard";
import OrderList from "./features/Orders/OrderList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/order-list",
        element: <OrderList />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

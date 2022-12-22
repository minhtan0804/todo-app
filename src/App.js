import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./container/login/Login";
import Popup from "./container/popup/Popup";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/popup',
    element: <Popup />
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

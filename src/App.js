import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Detail from "./container/Deatails/Deatails";
import Home from "./container/home/Home";
import Login from "./container/login/Login"
;
import NotFound from "./container/popup/NotFound";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '',
    element: <div>Hello</div>,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Tickets from "./components/Tickets/Tickets";
import Speakers from "./components/Speakers/Speakers";
import Workshop from "./components/Workshop/Workshop";
import Sponsers from "./components/Sponsers/Sponsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/tickets", element: <Tickets /> },
      { path: "/speakers", element: <Speakers /> },
      { path: "/workshop", element: <Workshop /> },
      { path: "/sponsers", element: <Sponsers /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

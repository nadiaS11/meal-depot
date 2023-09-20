import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import SendMeal from "./components/SendMeal";
import Categories from "./components/Categories";
import CategoryItems from "./components/CategoryItems";
import CategoryList from "./components/CategoryList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },

      {
        path: "/categories/",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories></Categories>,
        children: [
          {
            path: "/categories/",

            element: <CategoryList></CategoryList>,
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
          },
          {
            path: "/categories/:strCategory",

            element: <CategoryItems></CategoryItems>,
            loader: ({ params }) =>
              fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
              ),
          },
        ],
      },
      {
        path: "/send-a-meal",
        element: <SendMeal></SendMeal>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

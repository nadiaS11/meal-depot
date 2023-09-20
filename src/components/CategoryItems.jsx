import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

const CategoryItems = () => {
  const { meals } = useLoaderData();
  console.log(meals);

  return (
    <div className="grid gap-8 grid-cols-2">
      {meals.map((item) => (
        <Link
          key={item.idMeal}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
            src={item.strMealThumb}
            alt=""
          />
          <div className="  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.strMeal}
            </h5>
            <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get Recipe
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

CategoryItems.propTypes = {};

export default CategoryItems;

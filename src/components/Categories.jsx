import PropTypes from "prop-types";
import { Link, useLoaderData, Outlet } from "react-router-dom";

const Categories = () => {
  const { categories } = useLoaderData();
  console.log(categories);
  return (
    <div className="pt-8">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <Link
          to="/categories"
          type="button"
          className="text-blue-700 hover:text-white border border-white  bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </Link>
        {categories?.map((category) => (
          <Link
            to={`/categories/${category.strCategory}`}
            key={category.id}
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 focus:text-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            {category.strCategory}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;

import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row  justify-between md:py-3 container mx-auto items-center dark:bg-gray-900 fixed z-20 top-0  border-b border-gray-200 dark:border-gray-600 ">
        <h1 className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Meals Depot
        </h1>

        <nav className=" flex  gap-2 flex-row md:gap-5 text-md font-semibold py-2">
          <NavLink
            className={`hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`hover:text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}
            to="/categories"
          >
            Categories
          </NavLink>
          <NavLink
            to="/send-a-meal"
            className=" hover:text-white  border border-solid border-blue-800  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send A Meal
          </NavLink>
        </nav>
      </div>
      <div className=" mt-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;

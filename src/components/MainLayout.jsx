import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row text-center items-center justify-between ">
        <h1 className=" text-xl font-bold py-2">Meals Depot</h1>
        <nav className="flex flex-col md:flex-row gap-5 text-md font-semibold ">
          <NavLink
            className={`text-gray-500 hover:bg-blue-700 hover:text-white font-bold py-1 px-4 rounded`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`hover:bg-blue-700 text-gray-500 hover:text-white font-bold px-4  py-1 rounded `}
            to="/categories"
          >
            Categories
          </NavLink>
          <NavLink
            to="/send-a-meal"
            className={`hover:bg-blue-700 text-gray-500 hover:text-white font-bold  py-1  px-4 rounded `}
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

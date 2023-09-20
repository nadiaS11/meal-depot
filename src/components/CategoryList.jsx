import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const CategoryList = () => {
  const { categories } = useLoaderData();
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories?.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

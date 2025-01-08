import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import cartStore from "@/stores/cartStore";
import { getCatigore } from "@/apis/catigore/catigore";
import { useEffect, useState } from "react";
import { Category, Meal } from "@/utlits/types";
import { getMeals } from "@/apis/meals/meals";
import Skeloton from "@/components/Skeloton";
import MenuSearchFilters, { FilterFormData } from "@/components/MenuSearchFilters";
const MenuCard = ({
  title,
  price,
  description,
  imageUrl,
  _id,
}: {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  _id: string;
}) => {
  const { addToCart } = cartStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="w-full"
    >
      <Card className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl || "/api/placeholder/400/320"}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span className="text-red-500 font-bold">${price}</span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex p-4  w-full">
          <button
            onClick={() => {
              addToCart({
                _id: _id,
                name: title,
                price: parseFloat(price),
                image: imageUrl,
                quantity: 1,
              });
            }}
            className="bg-black text-white font-serif text-sm  px-4 py-2 flex w-full justify-center items-center capitalize rounded-md"
          >
               add to menu <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

const DeliveryApps = () => {
  const deliveryApps = [
    { name: "UberEats", logo: "brand4.png" },
    { name: "GrubHub", logo: "brand3.png" },
    { name: "DoorDash", logo: "brand1.png" },
    { name: "Postmates", logo: "brand2.png" },
    { name: "FoodPanda", logo: "brand1.png" },
    { name: "Deliveroo", logo: "brand3.png" },
  ];

  return (
    <div className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold text-center mb-6"
      >
        You can order through apps
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {deliveryApps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={app.logo}
              alt={`${app.name} logo`}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const RestaurantMenu = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0,
  });

  useEffect(() => {
    loadCategories();
  }, []);



  const loadCategories = async () => {
    try {
      const data = await getCatigore();
      setCategories(data);
    } catch (error) {
    }
  };

  const loadMeals = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMeals(params);
      setMeals(data.meals);
      setPagination(data.pagination);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };




  const handleSearch = (searchFilters: FilterFormData) => {

    loadMeals({
      "search": searchFilters.search,
      "minPrice": searchFilters.priceRange.min,
      "maxPrice": searchFilters.priceRange.max,
      "sortBy": searchFilters.sortBy,
    });
  };
  const handleReset = () => {
    loadMeals();
  };


  useEffect(() => {
    loadMeals({ category: selectedCategory });
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <MenuSearchFilters onSearch={handleSearch} onReset={handleReset} />
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          className={`bg-black/70 text-white px-4 py-2 rounded-2xl ${
            !selectedCategory ? "bg-red-500" : ""
          }`}
          onClick={() => setSelectedCategory("")}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            key={item._id}
            onClick={() => setSelectedCategory(item._id)}
            className={`bg-black/70 text-white px-4 py-2 rounded-2xl ${
              selectedCategory === item._id ? "bg-red-500" : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {loading && <Skeloton />}
  

{!loading && meals.length === 0 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col items-center justify-center py-10 "
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-rose-400 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ scale: 0.8, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M13 10h.01M12 6v.01M17 17h.01M20.69 13.73A2 2 0 1019 11h0a2 2 0 00-1.38 3.73zM8.31 13.73A2 2 0 117 11h0a2 2 0 011.38 3.73z"
      />
    </motion.svg>
    <motion.h2
      className="text-xl font-semibold text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
    >
      No Meals Found
    </motion.h2>
    <motion.p
      className="text-gray-500 mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
    >
      Try searching for a different dish or check back later.
    </motion.p>
  </motion.div>
)}

      {error && <div className="text-center text-red-500 py-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MenuCard
            key={meal._id}
            _id={meal._id}
            title={meal.name}
            price={meal.price.toString()}
            description={meal.description}
            imageUrl={meal.image}
          />
        ))}
      </div>

      {pagination.pages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => loadMeals({ category: selectedCategory, page })}
                className={`px-4 py-2 rounded ${
                  pagination.page === page
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}

      <DeliveryApps />
    </div>
  );
};

export default RestaurantMenu;

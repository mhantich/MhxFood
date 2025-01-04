import  { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Search, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface FilterFormData {
  search: string;
  priceRange: {
    min: string;
    max: string;
  };
  sortBy: string;
  dietary: string[];
  spiciness: string;
}

const MenuSearchFilters = ({ onSearch , onReset}: { onSearch: (data: FilterFormData) => void , onReset: () => void }) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterFormData>({
    defaultValues: {
      search: "",
      priceRange: {
        min: "",
        max: "",
      },
      sortBy: "default",

    },
  });



  const onSubmit = (data: FilterFormData) => {
    onSearch(data);
  };

  const handleReset = () => {
    reset();
    setIsFiltersVisible(false);
    onReset();

  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 items-center mb-4">
          <div className="relative flex-1">
            <Controller
              name="search"
              control={control}
              rules={{
                minLength: {
                  value: 2,
                  message: "Search term must be at least 2 characters",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Search meals..."
                  className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              )}
            />
            {errors.search && (
              <p className="text-red-500 text-sm mt-1">
                {errors.search.message}
              </p>
            )}
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            type="button"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        {isFiltersVisible && (
          <Card className="p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price Range
                </label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Controller
                      name="priceRange.min"
                      control={control}
                      rules={{
                        min: { value: 0, message: "Price cannot be negative" },
                        validate: (value, formValues) =>
                          !formValues.priceRange.max ||
                          parseFloat(value) <=
                            parseFloat(formValues.priceRange.max) ||
                          "Min price should be less than max price",
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="number"
                          placeholder="Min"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      )}
                    />
                    {errors.priceRange?.min && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.priceRange.min.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <Controller
                      name="priceRange.max"
                      control={control}
                      rules={{
                        min: { value: 0, message: "Price cannot be negative" },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="number"
                          placeholder="Max"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      )}
                    />
                    {errors.priceRange?.max && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.priceRange.max.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Sort By
                </label>
                <Controller
                  name="sortBy"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="default">Default</option>
                      <option value="pricelow">Price: Low to High</option>
                      <option value="pricehigh">Price: High to Low</option>
                      <option value="nameasc">Name: A to Z</option>
                      <option value="namedesc">Name: Z to A</option>
                    </select>
                  )}
                />
              </div>



            </div>

          </Card>
        )}
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Apply Filters
              </button>
            </div>
      </form>
    </div>
  );
};

export default MenuSearchFilters;

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export const MenuSection = () => {
  const categories = [
    { title: "Breakfast", icon: "☕", description: "Start your day right" },
    { title: "Main Dishes", icon: "🍽️", description: "Delicious entrees" },
    { title: "Drinks", icon: "🥤", description: "Refreshing beverages" },
    { title: "Desserts", icon: "🍰", description: "Sweet endings" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-serif text-4xl">
          Browse Our Menu
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="cursor-pointer">
                <CardHeader>
                  <div className="text-4xl text-center">{category.icon}</div>
                  <h3 className="font-serif text-xl text-center">{category.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{category.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <button className="text-sm text-primary hover:underline">
                    Explore Menu
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

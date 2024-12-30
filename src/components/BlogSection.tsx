import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogSection() {
  const blogs = [
    {
      date: "January 3, 2023",
      title: "How to prepare a delicious gluten free sushi",
      image: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
    },
    {
      date: "January 3, 2023",
      title: "Exclusive baking lessons from the pastry king",
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare the perfect fries in an air fryer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare delicious chicken tenders",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare a delicious gluten free sushi",
      image: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
    },
    {
      date: "January 3, 2023",
      title: "Exclusive baking lessons from the pastry king",
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare the perfect fries in an air fryer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare delicious chicken tenders",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare a delicious gluten free sushi",
      image: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
    },
    {
      date: "January 3, 2023",
      title: "Exclusive baking lessons from the pastry king",
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare the perfect fries in an air fryer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare delicious chicken tenders",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare a delicious gluten free sushi",
      image: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
    },
    {
      date: "January 3, 2023",
      title: "Exclusive baking lessons from the pastry king",
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare the perfect fries in an air fryer",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
    },
    {
      date: "January 3, 2023",
      title: "How to prepare delicious chicken tenders",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
    },

  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-serif mb-4">Our Blog & Articles</h1>
        <p className="text-gray-600">
          We consider all the drivers of change gives you the components you need
          to change to create a truly happens.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="font-medium leading-tight hover:text-red-600 transition-colors cursor-pointer">
                  {blog.title}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
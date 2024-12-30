import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const MenuCard = ({ title, price, description, imageUrl }: { title: string, price: string, description: string, imageUrl: string }) => {
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
      </Card>
    </motion.div>
  );
};

const DeliveryApps = () => {
  const deliveryApps = [
    { name: 'UberEats', logo: 'brand4.png' },
    { name: 'GrubHub', logo: 'brand3.png' },
    { name: 'DoorDash', logo: 'brand1.png' },
    { name: 'Postmates', logo: 'brand2.png' },
    { name: 'FoodPanda', logo: 'brand1.png' },
    { name: 'Deliveroo', logo: 'brand3.png' }
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
  const menuItems = [
    {
      title: 'Fried Eggs',
      price: '9.99',
      description: 'Made with eggs, spices, salt, and other ingredients',
      imageUrl: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
    },
    {
      title: 'Hawaiian Pizza',
      price: '15.99',
      description: 'Made with eggs, spices, salt, and other ingredients',
      imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
    },
    {
      title: 'Fried Eggs',
      price: '9.99',
      description: 'Made with eggs, spices, salt, and other ingredients',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
    },
    {
      title: 'Hawaiian Pizza',
      price: '15.99',
      description: 'Made with eggs, spices, salt, and other ingredients',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
    },
    {
        title: 'Fried Eggs',
        price: '9.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
      },
      {
        title: 'Hawaiian Pizza',
        price: '15.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
      },
      {
        title: 'Fried Eggs',
        price: '9.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
      },
      {
        title: 'Hawaiian Pizza',
        price: '15.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
      },
      {
        title: 'Fried Eggs',
        price: '9.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg'
      },
      {
        title: 'Hawaiian Pizza',
        price: '15.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg'
      },
      {
        title: 'Fried Eggs',
        price: '9.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAKp5o2Y7s06s6aKQBCkPDB4p9bGvgXlCHw&s'
      },
      {
        title: 'Hawaiian Pizza',
        price: '15.99',
        description: 'Made with eggs, spices, salt, and other ingredients',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U2drNqhoT1MsLFA8KOhS3dEokrI9kxxOyQ&s'
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
      <DeliveryApps />
    </div>
  );
};

export default RestaurantMenu;
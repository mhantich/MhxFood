import { useState } from "react";
import { motion } from "framer-motion";
import { useUserStore } from "@/stores/userStore";
import {
  Camera,
  Edit2,
  Calendar,
  Mail,
  Github,
  Twitter,
} from "lucide-react";
import { getImageUrl } from "@/utlits/imageUtils";

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);
  const [activeTab, setActiveTab] = useState("recipes");

  const stats = [
    { label: "Recipes", value: "124" },
    { label: "Followers", value: "12.5k" },
    { label: "Following", value: "847" },
    { label: "Likes", value: "2.4k" },
  ];

  const recipes = [
    {
      id: 1,
      title: "Italian Pasta",
      likes: 234,
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      title: "Sushi Roll",
      likes: 187,
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      title: "Greek Salad",
      likes: 156,
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: "url(/hero-img.jpg)" }}
        className="relative h-80 "
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
        >
          <Camera className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8 -mt-32">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="p-14 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Profile Image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden"
                >
                  <img
                    src={getImageUrl(user?.profileImage)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md">
                  <Edit2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="mt-10 py-4 sm:mt-0 sm:ml-8 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user?.lastName} {user?.firstName}
                  </h1>
            
                </div>
         
                <div className="mt-4 flex py-5 flex-wrap gap-4 justify-center sm:justify-start">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {user?.createdAt}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {user?.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex">
              {["recipes", "collections", "about"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === tab
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === "recipes" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {recipe.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {recipe.likes} likes
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "about" && (
              <div className="max-w-3xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About Me
                </h2>
                <p className="text-gray-600 mb-6">
                  Passionate food enthusiast and professional chef with over 8
                  years of experience in creating delicious, innovative dishes.
                  Specializing in fusion cuisine and healthy cooking
                  alternatives.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    @sarahjchef
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    @sarahjchef
                  </a>
                </div>
              </div>
            )}

            {activeTab === "collections" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="text-gray-600">Collections coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

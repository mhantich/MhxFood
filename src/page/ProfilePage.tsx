import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUserStore } from "@/stores/userStore";
import {
  Camera,
  Edit2,
  Calendar,
  Mail,

  Clock,
  User,
  CreditCard,
} from "lucide-react";
import { getImageUrl } from "@/utlits/imageUtils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileReservation from "@/apis/profiles/Profile";
import { CartItem, userOrder } from "@/utlits/types";

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);
  const [activeTab, setActiveTab] = useState("recipes");
  const [orders, setOrders] = useState<userOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const  token  = useUserStore((state) => state.token);


  const fetchOrders = async () => {
    setLoading(true);
    if (!user?._id || !token) return;
    try {
      const orders = await profileReservation(user._id ,token);
      setOrders(orders);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchOrders();
  }, []);



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
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    {user?.phone}
                  </div>
                  <div className="flex items-center text-gray-600"> </div>
                </div>
              </div>
            </div>

            {/* Stats */}

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

{   loading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              {activeTab === "recipes" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">
                        Order History
                      </CardTitle>
                    </CardHeader>
                  </Card>

                  <div className="h-[600px] rounded-md">
                    <div className="space-y-4">
                      {orders.map((order: any) => (
                        <Card
                          key={order._id}
                          className="border border-gray-200"
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col space-y-4">
                              {/* Order Header */}
                              <div className="flex justify-between items-start">
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>{order.status.toUpperCase()}</div>
                              </div>

                              {/* Customer Info */}
                              <div className="flex items-center space-x-2 text-sm">
                                <User className="w-4 h-4 text-gray-500" />
                                <span>
                                  {order.customer.firstName}{" "}
                                  {order.customer.lastName}
                                </span>
                              </div>

                              {/* Order Items */}
                              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                {order?.items?.map((item: CartItem) => (
                                  <div
                                    key={item._id}
                                    className="flex justify-between items-center"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div>
                                        <p className="font-medium">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          Qty: {item.quantity}
                                        </p>
                                      </div>
                                    </div>
                                    <p className="font-medium">${item.price}</p>
                                  </div>
                                ))}
                              </div>

                              {/* Order Footer */}
                              <div className="flex justify-between items-center pt-4 border-t">
                                <div className="flex items-center space-x-2">
                                    
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-gray-500">
                                    Total Amount
                                  </p>
                                  <p className="text-lg font-bold">
                                    ${order?.totalAmount}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
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
          )}


        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

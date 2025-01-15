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
  LoaderCircle,
} from "lucide-react";
import { getImageUrl } from "@/utlits/imageUtils";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import profileReservation from "@/apis/profiles/Profile";
import { userOrder } from "@/utlits/types";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);
  const [activeTab, setActiveTab] = useState("recipes");
  const [orders, setOrders] = useState<userOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const  token  = useUserStore((state) => state.token);
  const [error, setError] = useState("");


  const fetchOrders = async () => {
    setLoading(true);
    if (!user?._id || !token) return;
    try {
      
      const orders = await profileReservation(user._id ,token);
      if(orders.success){  
        setOrders(orders.data);
        setLoading(false);
      }else{
        setLoading(false);
        toast.error(orders.message);
        setError(orders.message);

      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError('no orders found');
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
          {error ?(
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">{error}</p>
            </div>
          ) : (
            <div>

{   loading ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">
                <LoaderCircle className="w-20 h-20 text-gray-500 animate-spin py-10" />
              </p>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              {activeTab === "recipes" && (
              <div className="">
                <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">
                        Order History
                      </CardTitle>
                    </CardHeader>
                  </Card>

                  <div >
                  <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4 text-left border">Status</th>
            <th className="p-4 text-left border">Customer</th>
            <th className="p-4 text-left border">Items</th>
            <th className="p-4 text-left border">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b hover:bg-gray-50">
              <td className="p-4 border">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{order.status.toUpperCase()}</span>
                </div>
              </td>
              <td className="p-4 border">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>
                    {order.customer.firstName} {order.customer.lastName}
                  </span>
                </div>
              </td>
              <td className="p-4 border">
                <div className="space-y-2">
                  {order?.items?.map((item) => (
                    <div key={item._id} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity} × ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </td>
              <td className="p-4 border">
                <p className="font-bold">${order?.totalAmount}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          )}


        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

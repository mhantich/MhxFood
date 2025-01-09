import { useState, useEffect } from "react";
import { Check, AlertCircle ,User2Icon, MailCheckIcon, PhoneCall, Clock, Table, CalendarDays, UtensilsCrossed, Package2 } from "lucide-react";
import { useForm } from "react-hook-form";
import cartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import DelveryOptions from "@/components/DelveryOptions";
import { useIsValideStore } from "@/stores/nextISvalide";
import { useReservationStore } from "@/stores/resStore";
import { useUserStore } from "@/stores/userStore";

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [deliveryType, setDeliveryType] = useState('');
  const { isValide, setIsValide } = useIsValideStore();
  const token = useUserStore((state) => state.token);

  const { reservation } = useReservationStore();
  const { user } = useUserStore();

  const { cart } = cartStore();

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  // Watch form changes
  const formValues = watch();

  useEffect(() => {
    if (isValid) {
      setIsValide(true);
    } else {
      setIsValide(false);
    }
  }, [isValid]);

  const handleBack = () => {
    setActiveStep((prev) => Math.max(1, prev - 1));
    setIsValide(false);
  };

  const handleNext = () => {
    if (activeStep === 1 && isValid) {
      // Process form data here
    }
    setActiveStep((prev) => Math.min(3, prev + 1));
  };


  const PlaceOrder = async () => {
    if (reservation && formValues && cart && deliveryType) {

      const orderData = {
        userId: user?._id,
        tableId: reservation.tableId,
        reservationDate: reservation.reservationDate,
        startTime: reservation.startTime,
        endTime: reservation.endTime,
        customer: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phone: formValues.phone,
        },
        items: cart,
        paymentMethod: "cash", // Adjust as needed, or make dynamic
        orderType: deliveryType
      }

      try {
        // Call your backend API to create a Stripe checkout session
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/reservation-order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            credentials: 'include', // Include cookies if required
          },
          body: JSON.stringify(orderData),
        });
  
        const respose = await response.json();
 
        if(respose.success){
   
          window.location.href = respose.data.sessionUrl;
        
        }
  
      } catch (error) {
        alert('Error processing payment. Please try again.');
      }
    } else {
      alert('Please fill all the fields');
    }
  };
  
  

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="w-full ">
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.firstName.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.lastName.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.email.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9-+()]*$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          {errors.phone.message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <DelveryOptions
              setDeliveryType={setDeliveryType}
              deliveryType={deliveryType || ''}
              setActiveStep={setActiveStep}
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment</h3>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                <Card className="w-full max-w-2xl bg-white shadow-lg">
      <CardContent className="p-6 space-y-6">
        {/* User Information Section */}
        <div className="space-y-4 border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User2Icon className="w-4 h-4 text-gray-400" />
              <span className="text-sm">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MailCheckIcon className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{user?.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PhoneCall className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{user?.phone}</span>
            </div>
          </div>
        </div>

        {/* Reservation Details Section */}
        <div className="space-y-4 border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reservation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <CalendarDays className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{reservation?.reservationDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm">
                {reservation?.startTime} - {reservation?.endTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Table className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Table #{reservation?.tableId}</span>
            </div>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Details</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-gray-700">
              <UtensilsCrossed className="w-4 h-4 text-gray-400 mt-1" />
              <div className="flex-1">
                <span className="text-sm font-medium block mb-1">Ordered Items:</span>
                <p className="text-sm">{cart.map((item) => item.name).join(', ')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Package2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm capitalize">{deliveryType}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {cart.length === 0 ? (
        <div>
          <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-gray-50">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ShoppingCart className="w-24 h-24 text-gray-400" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center"
                  >
                    0
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <h3 className="text-4xl font-serif font-semibold text-gray-800">
                  Your cart is empty
                </h3>
                <p className="text-gray-500">
                  Looks like you haven't added anything yet
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-2 rounded-full hover:shadow-lg transition-shadow">
                  Start Shopping
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Side - Stepper and Form */}
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                {/* Stepper */}
                <div className="mb-8">
                  <div className="flex items-center justify-between relative">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className="flex flex-col items-center relative z-10"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step <= activeStep
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          {step < activeStep ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            step
                          )}
                        </div>
                        <div className="text-sm mt-2">
                          {step === 1
                            ? "Information"
                            : step === 2
                            ? "Delivery"
                            : "Payment"}
                        </div>
                      </div>
                    ))}
                    {/* Progress line */}
                    <div
                      className="absolute top-5 h-0.5 bg-gray-200 w-full -z-10"
                      style={{ left: "0" }}
                    >
                      <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{
                          width: `${((activeStep - 1) / 2) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => {
                      handleBack();
                    }}
                    className={`px-6 py-2 rounded ${
                      activeStep === 1
                        ? "bg-gray-100 text-gray-400"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    disabled={activeStep === 1}
                  >
                    Back
                  </button>

                  {activeStep === 3 ? (
                    <button
                      onClick={PlaceOrder}
                      className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                      Place Order
                    </button>
                  ) : (
                    <button
                      disabled={!isValide}
                      onClick={() => handleNext()}
                      className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>

              {/* Right Side - Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded-md"
                          />
                          <div className="font-medium">{item.name}</div>
                        </div>
                        <div className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </div>
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>
                        $
                        {cart
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

import { useState } from 'react';
import { Check, MapPin, CreditCard, Truck, User } from 'lucide-react';
import cartStore from '@/stores/cartStore';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [deliveryType, setDeliveryType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTable, setSelectedTable] = useState('');
  
  // Sample cart data - replace with your actual cart data
const { cart } = cartStore();

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Delivery Options</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <button
                  onClick={() => setDeliveryType('delivery')}
                  className={`flex-1 p-4 border rounded-lg ${
                    deliveryType === 'delivery' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                >
                  <Truck className="mx-auto mb-2" />
                  <div className="text-center">Delivery</div>
                </button>
                <button
                  onClick={() => setDeliveryType('dine-in')}
                  className={`flex-1 p-4 border rounded-lg ${
                    deliveryType === 'dine-in' ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                >
                  <User className="mx-auto mb-2" />
                  <div className="text-center">Dine-in</div>
                </button>
              </div>
              
              {deliveryType === 'delivery' && (
                <div className="border rounded-lg p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-gray-400" />
                    <span className="ml-2">Map Component Here</span>
                  </div>
                </div>
              )}
              
              {deliveryType === 'dine-in' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    {['12:00', '12:30', '13:00', '13:30'].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 border rounded ${
                          selectedTime === time ? 'border-blue-500 bg-blue-50' : ''
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Table 1', 'Table 2', 'Table 3'].map((table) => (
                      <button
                        key={table}
                        onClick={() => setSelectedTable(table)}
                        className={`p-2 border rounded ${
                          selectedTable === table ? 'border-blue-500 bg-blue-50' : ''
                        }`}
                      >
                        {table}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment</h3>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard />
                  <span>Card Details</span>
                </div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-2 border rounded"
                  />
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
      {
        cart.length === 0 ?( <div>Cart is empty</div>) : (
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
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200'
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
                            ? 'Information'
                            : step === 2
                            ? 'Delivery'
                            : 'Payment'}
                        </div>
                      </div>
                    ))}
                    {/* Progress line */}
                    <div
                      className="absolute top-5 h-0.5 bg-gray-200 w-full -z-10"
                      style={{ left: '0' }}
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
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className={`px-6 py-2 rounded ${
                      activeStep === 1
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    disabled={activeStep === 1}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(3, prev + 1))}
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                  >
                    {activeStep === 3 ? 'Place Order' : 'Next'}
                  </button>
                </div>
              </div>
  
              {/* Right Side - Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-md" />
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
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    
    </div>
  );
};

export default CheckoutPage;
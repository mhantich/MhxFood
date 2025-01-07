import { useEffect } from "react";
import DeniIn from "./DeniIn";


interface DelveryOptionsProps {
  setDeliveryType: (type: string) => void;
  deliveryType: string;
  setIsNextValid: (isValid: boolean) => void;
}
const DelveryOptions = ({
  setDeliveryType,
  deliveryType,
  setIsNextValid,
}: DelveryOptionsProps) => {
 
  useEffect(() => {

    setIsNextValid(true);
  }, [deliveryType]);





  return (
    <div>
      <div>
        <div className="w-full p-4 bg-white flex justify-between items-center gap-2">
          {["deni-in", "delivery", "pickup"].map((item, index) => (
            <button
              key={index}
              onClick={() => setDeliveryType(item)}
              className={`${
                deliveryType === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } px-4 py-2 w-full rounded-md`}
            >
              {item}
            </button>
          ))}
        </div>
        {deliveryType === "deni-in" && (
          <div className="w-full p-4 bg-white">
            <DeniIn setIsNextValid={setIsNextValid} />
          </div>
        )}
        {deliveryType === "delivery" && (
          <div className="w-full p-4 bg-white">
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}
        {deliveryType === "pickup" && (
          <div className="w-full p-4 bg-white">
            <input
              type="text"
              placeholder="Enter your pickup location"
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DelveryOptions;

import { useEffect } from "react";
import DeniIn from "./DeniIn";
import { FormProvider, useForm } from "react-hook-form";
import { useIsValideStore } from "@/stores/nextISvalide";
import { Reservation } from "@/utlits/types";
import { Button } from "./ui/button";

interface DelveryOptionsProps {
  setDeliveryType: (type: string) => void;
  deliveryType: string;
  setActiveStep: (step: number) => void;
}
const DelveryOptions = ({
  setDeliveryType,
  deliveryType,
  setActiveStep,
}: DelveryOptionsProps) => {
  const { setIsValide } = useIsValideStore();

  useEffect(() => {

    setIsValide(false);
  }, [deliveryType]);


  const methods = useForm<Reservation>({
    defaultValues: {
      reservationDate: '',
      startTime: "",
      endTime: "",
      tableId: "",
    },
  });

  const onSubmit = () => {

  };


  return (
    <div>
      <div>
        <div className="w-full p-4 bg-white flex justify-between items-center gap-2">
        <Button  className= {`${deliveryType === 'dine-in' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-rose-500'} px-4 py-2 w-full rounded-md`} onClick={() => setDeliveryType('dine-in')}>
              Dine In
            </Button>
              <Button disabled={true} className= {`${deliveryType === 'delivery' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-rose-500'} px-4 py-2 w-full rounded-md`} onClick={() => setDeliveryType('delivery')}>
              Delivery
            </Button>
            <Button disabled={true} className= {`${deliveryType === 'pickup' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-rose-500'} px-4 py-2 w-full rounded-md`} onClick={() => setDeliveryType('pickup')}>
              Pickup
            </Button>
        </div>
        {deliveryType === "dine-in" && (
              <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <DeniIn setActiveStep={setActiveStep} />
              </form>
            </FormProvider>
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

import { useFormContext } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Table } from "@/utlits/types";
import { checkAvailability, getTables } from "@/apis/tables/tables";
import { useIsValideStore } from "@/stores/nextISvalide";
import { useReservationStore } from "@/stores/resStore";

const DeniIn = ({setActiveStep}:{setActiveStep: (step: number) => void}) => {
  const { watch, setValue } = useFormContext();
  const [tables, setTables] = useState<Table[]>([]);
  const { setIsValide } = useIsValideStore();
  const { setReservation  } = useReservationStore();


  const reservationDate = watch("reservationDate");
  const startTime = watch("startTime");
  const endTime = watch("endTime");
  const tableId = watch("tableId");

  useEffect(() => {
    getTables().then((data: Table[]) => {
      setTables(data);
    });
  }, []);

  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = i + 9;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const isDateValid = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isTimeValid = () => {
    if (!startTime || !endTime) return false;
    return startTime < endTime;
  };

  const handleCheckAvailability = async () => {
    if (!isDateValid(reservationDate) || !isTimeValid() || !tableId) {
      alert("Please select a valid date (today or later) and a table");
      return;
    }

    const availability = await checkAvailability(
      tableId,
      reservationDate!.toISOString().split("T")[0],
      startTime,
      endTime
    );

    if (availability.available) {

      setReservation({
        reservationDate: reservationDate!.toISOString().split("T")[0],
        startTime: startTime,
        endTime: endTime,
        tableId: tableId,
      })
      setActiveStep(3)
      setIsValide(true);
    } else {
      setIsValide(false);
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      <CardHeader>
        <CardTitle>Table Reservation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Date</Label>
          <Calendar
            mode="single"
            selected={reservationDate as Date}
            onSelect={(date) => setValue("reservationDate", date)}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today;
            }}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2">
          <Label>Start Time</Label>
          <Select
            value={startTime}
            onValueChange={(value) => setValue("startTime", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select start time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>End Time</Label>
          <Select
            value={endTime}
            onValueChange={(value) => setValue("endTime", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select end time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem
                  key={time}
                  value={time}
                  disabled={time <= startTime}
                >
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Table Number</Label>
          <Select
            value={tableId}
            onValueChange={(value) => setValue("tableId", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select table" />
            </SelectTrigger>
            <SelectContent>
              {tables.map((table: Table) => (
                <SelectItem key={table._id} value={table._id}>
                  Table {table.tableNumber} / {table.capacity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleCheckAvailability}
          type="button"
          className="w-full"
            disabled={!reservationDate || !startTime || !endTime || !tableId}
        >
          Check Availability
        </Button>
      </CardContent>
    </div>
  );
};

export default DeniIn;

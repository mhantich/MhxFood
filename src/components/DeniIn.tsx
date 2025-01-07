import { useState } from "react";
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
import { useEffect } from "react";
import { Table } from "@/utlits/types";
import { getTables } from "@/apis/tables/tables";

const DeniIn = ({setIsNextValid}:{setIsNextValid: (isValid: boolean) => void}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [table, setTable] = useState("");
  const [tables, setTables] = useState<Table[]>([]);

console.log(tables)
    useEffect(() => {
        getTables().then((data: Table[]) => {
            setTables(data);
          });
    }, []);







  // Generate time slots from 9 AM to 10 PM
  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = i + 9;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  // Generate table numbers 1-10

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

  const handleCheckAvailability = () => {
    

    if (!isDateValid(date) || !isTimeValid() || !table ) {
        alert("Please select a valid date (today or later) and a table");

        return;
    }
   

    // Here you would typically make an API call to check availability
    console.log("Checking availability for:", {
      date: date?.toString(),
      startTime,
      endTime,
      table,
    });
  };

  return (
    <div className="w-full  mx-auto p-4">
      <CardHeader>
        <CardTitle>Table Reservation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Date</Label>
          <Calendar
            mode="single"
            selected={date as Date}
            onSelect={(date: Date | undefined) => setDate(date ?? null)}
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
          <Select value={startTime} onValueChange={setStartTime}>
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
          <Select value={endTime} onValueChange={setEndTime}>
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
          <Select value={table} onValueChange={setTable}>
            <SelectTrigger>
              <SelectValue placeholder="Select table" />
            </SelectTrigger>
            <SelectContent>
              {tables.map((table: Table) => (
                <SelectItem key={table._id} value={table._id} >
                  Table {table.tableName} / {table.capacity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleCheckAvailability}
          className="w-full"
          disabled={!date || !startTime || !endTime || !table}
        >
          Check Availability
        </Button>
      </CardContent>
    </div>
  );
};

export default DeniIn;

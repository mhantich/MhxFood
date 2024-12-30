import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BookingSection() {
  return (
    <div  style={{ backgroundImage: `url(https://www.sentinellesduweb.com/wp-content/uploads/2021/10/senitnellesduweb-google.fr_.png)` }} className="relative min-h-screen">
      {/* Background Map */}

      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif mb-4 text-white">Book A Table</h1>
          <p className="text-gray-600">
            We consider all the drivers of change to create a truly happening experience
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <Card className="bg-white/90 backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 9}:00`}>
                          {i + 9}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Number of People" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="w-full bg-red-600 hover:bg-red-700">
                Book A Table
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
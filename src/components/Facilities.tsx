
import { Card, CardContent } from '@/components/ui/card';
import { Building, Compass } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Building className="w-8 h-8 text-rose-500" />,
      title: "City Views",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },
    {
      icon: <Compass className="w-8 h-8 text-rose-500 " />,
      title: "South Facing",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },
    {
      icon: <Building className="w-8 h-8 text-rose-500 " />,
      title: "Swimming Pool",
      description: "Proin felis mauris, fermentum non condimentum id, porttitor in nisl curabitur euismod convallis."
    },

  ];

  return (
    <div className="w-full container  mx-auto ">
      <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {facility.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
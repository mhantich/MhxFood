import { Card, CardContent } from "./ui/card";

const SecondSection = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490"
            alt="Healthy food wrap"
            className="rounded-lg object-cover w-full h-[400px]"
          />
          <Card className="absolute bottom-4 left-4 bg-gray-800 text-white p-6 max-w-sm">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Come and visit us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-sm">(414) 857 - 0107</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-sm">happy@umyrestaurant.com</span>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  837 W Marshall Lane Marshalltown,
                  <br />
                  IA 50158, Los Angeles
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif">
            We provide healthy
            <br />
            food for your family.
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in a rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At place, we believe that dining is not just about food but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
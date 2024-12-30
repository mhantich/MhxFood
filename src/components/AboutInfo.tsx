import { CardContent } from "./ui/card";

function AboutInfo() {
  const features = [
    {
      title: "Online Services Available",
      description:
        "Our visual designer lets you quickly and of drag a down your way to",
    },
    {
      title: "Online Services Available",
      description:
        "Our visual designer lets you quickly and of drag a down your way to",
    },
    {
      title: "Online Services Available",
      description:
        "Our visual designer lets you quickly and of drag a down your way to",
    },
    {
      title: "Online Services Available",
      description:
        "Our visual designer lets you quickly and of drag a down your way to",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex py-20 flex-col md:flex-row gap-8 px-5  max-w-6xl mx-auto ">
        {/* Images Grid */}

        {/* Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl font-serif">Fastest Food Delivery in City</h1>
          <p className="text-gray-600">
            Our visual designer lets you quickly and of drag a down your way to
            customized lay both keep desktop.
          </p>
          <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex bg-gray-200/40 p-2 items-center gap-2"
              >
                <CardContent className="flex flex-col gap-2">
                  <span className="text-rose-700">{feature.title}</span>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </div>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 gap-4">
          <div className="">
            <img
              src="https://media.sciencephoto.com/f0/03/28/02/f0032802-800px-wm.jpg "
              alt="Chef preparing food"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;

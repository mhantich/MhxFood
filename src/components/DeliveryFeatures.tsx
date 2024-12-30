

const DeliveryFeatures = () => {
    const features = [
      { title: 'Delivery within 30 minutes' },
      { title: 'Best Offer & Prices' },
      { title: 'Online Services Available' }
    ];
  
    return (
      <div className="flex py-20 flex-col md:flex-row gap-8  max-w-6xl mx-auto ">
   

     
        {/* Images Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="">
            <img
            src="https://media.sciencephoto.com/f0/03/28/02/f0032802-800px-wm.jpg "
            alt="Chef preparing food"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4 justify-between">
            <img
            src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_FT23_376_EC_120123_3.jpg" 
            alt="Fresh salad bowl"
              className="w-full h-44 object-cover rounded-lg"
            />
      
            <img
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2caca97b-77f6-48e7-837d-62642c0c9861/Derivates/12591894-e010-4a02-b04e-2627d8374298.jpg" 
            alt="Grilled dishes"
              className="w-full h-44  object-cover rounded-lg"
            />
          </div>
        </div>
  
        {/* Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl font-serif">Fastest Food Delivery in City</h1>
          <p className="text-gray-600">
            Our visual designer lets you quickly and of drag a down your way to customized lay both keep desktop.
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-gray-700">{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    );
  };
  
  export default DeliveryFeatures;
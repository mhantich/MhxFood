
export const BlogArticles = () => {
    const articles = [
      {
        image: "https://www.mashed.com/img/gallery/this-is-why-kfcs-fried-chicken-is-so-delicious/intro-1560197518.jpg",
        date: "January 3, 2023",
        title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
        isMain: true
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
        date: "January 3, 2023",
        title: "How to prepare the perfect french fries in an air fryer"
      },
      {
        image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
        date: "January 3, 2023",
        title: "How to prepare delicious chicken tenders"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067",
        date: "January 3, 2023",
        title: "7 delicious cheesecake recipes you can prepare"
      },
      {
        image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
        date: "January 3, 2023",
        title: "5 great pizza restaurants you should visit this city"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">Our Blog & Articles</h2>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full">
            Read All Articles
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Article */}
          <div className="col-span-1 md:col-span-1">
            <div className="space-y-4">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full rounded-lg object-cover h-[400px]"
              />
              <div className="space-y-2">
                <p className="text-gray-500 text-sm">{articles[0].date}</p>
                <h3 className="text-xl font-medium">{articles[0].title}</h3>
              </div>
            </div>
          </div>
  
          {/* Grid of Smaller Articles */}
          <div className="grid grid-cols-2 gap-4">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="space-y-2">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full rounded-lg object-cover h-[160px]"
                />
                <p className="text-gray-500 text-xs">{article.date}</p>
                <h3 className="text-sm font-medium leading-tight">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
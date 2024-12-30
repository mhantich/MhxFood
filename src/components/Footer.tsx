export const Footer = () => {
  const pages = {
    'Pages': ['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'],
    'Utility Pages': ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More']
  };

  const socialLinks = ['twitter', 'facebook', 'instagram', 'youtube'].map(platform => (
    <a key={platform} href={`#${platform}`} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
      <span className="w-4 h-4 bg-white/20 rounded-full"></span>
    </a>
  ));

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <h3 className="text-xl font-medium">Bistro Bliss</h3>
            </div>
            <p className="text-gray-400 text-sm">
              In the new era of technology we look a in the future with certainty and pride to for our company and.
            </p>
            <div className="flex gap-2">
              {socialLinks}
            </div>
          </div>

          {/* Pages Sections */}
          {Object.entries(pages).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href={`#${link}`} className="text-gray-400 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Instagram Section */}
          <div>
            <h4 className="font-medium mb-4">Follow Us On Instagram</h4>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <img 
                  key={i}
                  src="https://www.mashed.com/img/gallery/this-is-why-kfcs-fried-chicken-is-so-delicious/intro-1560197518.jpg"
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MenuSection = () => {
    const categories = [
      { title: 'Breakfast', icon: '☕', description: 'Start your day right' },
      { title: 'Main Dishes', icon: '🍽️', description: 'Delicious entrees' },
      { title: 'Drinks', icon: '🥤', description: 'Refreshing beverages' },
      { title: 'Desserts', icon: '🍰', description: 'Sweet endings' },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-serif text-4xl">Browse Our Menu</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="group cursor-pointer rounded-lg border p-6 text-center transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">{category.icon}</div>
                <h3 className="mb-2 font-serif text-xl">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
                <button className="mt-4 text-sm text-primary group-hover:underline">
                  Explore Menu
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
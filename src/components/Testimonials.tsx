 export const Testimonials = () => {
    const testimonials = [
      {
        quote: '"The best restaurant"',
        content: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
        author: 'Sophia Rolsaan',
        location: 'Los Angeles, CA',
        image: 'https://media.sciencephoto.com/f0/03/28/02/f0032802-800px-wm.jpg'
      },
      {
        quote: '"Simply delicious"',
        content: 'Place exceeded my expectations on all fronts. The ambiance was cozy and sweet, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
        author: 'Matt Cannon',
        location: 'San Diego, CA',
        image: 'https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg'
      },
      {
        quote: '"One of a kind restaurant"',
        content: 'The culinary experience at place is next to none, the atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended!',
        author: 'Andy Smith',
        location: 'San Francisco, CA',
        image: 'https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg'
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-5 py-12">
        <h2 className="text-3xl font-serif text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <p className="text-red-500 font-semibold text-lg">
                {testimonial.quote}
              </p>
              <p className="text-gray-600">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" >
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
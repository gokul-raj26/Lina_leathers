import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Designer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The leather quality is exceptional! My handbag has aged beautifully and still looks stunning after three years of daily use. The craftsmanship is truly remarkable.',
      rating: 5,
      product: 'Premium Leather Handbag'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Best leather jacket I\'ve ever owned. The Italian leather is incredibly soft yet durable. It fits perfectly and the craftsmanship is evident in every stitch.',
      rating: 5,
      product: 'Genuine Leather Jacket'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'My leather belt has become my go-to accessory. The quality is outstanding and it complements every outfit. Worth every penny for genuine Italian leather.',
      rating: 5,
      product: 'Leather Belt'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The phone case provides excellent protection while maintaining the premium feel of genuine leather. It\'s aged beautifully and developed a nice patina.',
      rating: 5,
      product: 'Leather Phone Case'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Photographer',
      image: 'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Perfect sling bag for my photography equipment. The leather is sturdy, the design is functional, and it looks professional. Excellent craftsmanship throughout.',
      rating: 5,
      product: 'Leather Sling Bag'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1043476/pexels-photo-1043476.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'My leather wallet has been with me for over 5 years and still looks amazing. The leather has developed a beautiful patina and the stitching is still perfect.',
      rating: 5,
      product: 'Leather Wallet'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: '5,000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '2,500+', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Testimonials Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Customer Stories
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real experiences from leather enthusiasts worldwide
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Reviews</h2>
            <p className="text-xl text-gray-600">What our customers are saying</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              className="bg-white rounded-lg shadow-lg p-8 mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="h-12 w-12 text-blue-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-blue-600">
                    Purchased: {testimonials[currentTestimonial].product}
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Reviews</h2>
            <p className="text-xl text-gray-600">Every voice matters to us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-xs">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-blue-600">
                  Product: {testimonial.product}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Happy Customers</h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the authentic leather craftsmanship that thousands of customers love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Leave a Review
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
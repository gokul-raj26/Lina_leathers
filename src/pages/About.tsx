import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To create exceptional leather goods that combine traditional craftsmanship with modern design and functionality.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building lasting relationships with leather enthusiasts and supporting local artisan communities.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Committed to the highest standards of leather quality, craftsmanship, and customer satisfaction.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Driven by genuine passion for leather craftsmanship and creating products that age beautifully with time.'
    }
  ];

  const timeline = [
    {
      year: '1990',
      title: 'The Beginning',
      description: 'Founded in Florence, Italy with a vision to create premium leather goods using traditional techniques.'
    },
    {
      year: '1995',
      title: 'First Collection',
      description: 'Launched our debut handbag collection, receiving overwhelming positive response from leather enthusiasts.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Expanded our product line to include jackets, accessories, and established partnerships with premium tanneries.'
    },
    {
      year: '2015',
      title: 'Recognition',
      description: 'Received international awards for leather craftsmanship excellence and sustainable practices.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Expanded internationally, serving leather enthusiasts in over 40 countries worldwide.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About Hero"
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
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of leather craftsmanship since 1990
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Journey Begins</h2>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small leather workshop in Florence has grown into a 
                globally recognized brand for premium leather goods. Our founder's vision was 
                clear: create leather products that combine traditional craftsmanship with 
                modern design, using only the finest materials.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every leather piece we create is a testament to our commitment to quality, 
                durability, and timeless style. We source our leather from the world's finest 
                tanneries and employ traditional techniques that have been perfected over 
                centuries.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve leather enthusiasts worldwide, but our core values 
                remain unchanged: authenticity, craftsmanship, and a genuine passion for 
                creating leather goods that last a lifetime.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Leather workshop"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-800">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped who we are today</p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind our success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Master Craftsman & Founder',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Michael Chen',
                role: 'Lead Designer',
                image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Quality Control Manager',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
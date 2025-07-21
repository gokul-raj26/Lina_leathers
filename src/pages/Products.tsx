import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Leather Handbags',
      category: 'handbags',
      description: 'Handcrafted Italian leather handbags',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$399',
      featured: true
    },
    {
      id: 2,
      name: 'Genuine Leather Jackets',
      category: 'jackets',
      description: 'Premium genuine leather jackets',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$599',
      featured: true
    },
    {
      id: 3,
      name: 'Leather Belts',
      category: 'accessories',
      description: 'Handcrafted leather belts',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$89',
      featured: false
    },
    {
      id: 4,
      name: 'Leather Phone Cases',
      category: 'accessories',
      description: 'Premium leather phone protection',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$49',
      featured: false
    },
    {
      id: 5,
      name: 'Leather Sling Bags',
      category: 'bags',
      description: 'Stylish crossbody leather bags',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$199',
      featured: true
    },
    {
      id: 6,
      name: 'Leather Wallets',
      category: 'accessories',
      description: 'Handcrafted leather wallets',
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$129',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'handbags', name: 'Handbags' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'bags', name: 'Bags' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Products Hero"
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
            Leather Collections
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our handcrafted leather collections
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-600 h-5 w-5" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <Link
                      to={`/products/${product.id}`}
                      className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
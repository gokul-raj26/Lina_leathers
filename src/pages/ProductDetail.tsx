import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  
  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: 'Premium Leather Handbag',
    category: 'Handbags',
    description: 'Handcrafted Italian leather handbag with exquisite attention to detail. This premium piece represents the perfect blend of traditional craftsmanship and modern functionality.',
    fullDescription: 'Our Premium Leather Handbag represents the pinnacle of Italian leather craftsmanship. Each bag is meticulously handcrafted by skilled artisans using traditional techniques passed down through generations. Made from the finest full-grain Italian leather, this handbag features hand-stitched seams, premium hardware, and a luxurious interior lining. The attention to detail is evident in every aspect, from the carefully selected leather to the precise finishing touches. This handbag is designed for those who appreciate authentic craftsmanship and understand that true luxury lies in quality that lasts a lifetime.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: '$399',
    originalPrice: '$499',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: [
      'Genuine Italian full-grain leather',
      'Hand-stitched construction',
      'Limited edition design',
      '2-year craftsmanship warranty',
      'Premium brass hardware'
    ],
    specifications: {
      'Material': 'Italian Full-Grain Leather',
      'Dimensions': '14" x 10" x 5"',
      'Weight': '2.5 lbs',
      'Color': 'Cognac Brown',
      'Origin': 'Handcrafted in Florence, Italy'
    }
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-blue-800 hover:text-blue-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                  25% OFF
                </span>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-blue-500 text-blue-600 font-medium">
                Description
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                Specifications
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 2,
                name: 'Leather Jacket',
                image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '$599'
              },
              {
                id: 3,
                name: 'Leather Belt',
                image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '$89'
              },
              {
                id: 4,
                name: 'Leather Wallet',
                image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
                price: '$129'
              }
            ].map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-orange-600">{relatedProduct.price}</span>
                    <Link
                      to={`/products/${relatedProduct.id}`}
                      className="text-blue-800 hover:text-blue-900 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
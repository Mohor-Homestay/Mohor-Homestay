import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: '/Interior-1.jpg',
      title: 'AC Double bed with attached bathroom'
    },
    {
      url: '/Interior-2.jpg',
      title: 'Mirror Sample'
    },
    {
      url: '/Interior-3.jpg',
      title: 'AC Double bed with common bathroom'
    },
    {
      url: '/Interior-4.jpg',
      title: 'Non AC double bood with common bathroom'
    },
    {
      url: '/Interior-5.jpg',
      title: 'AC Double bed with attached bathroom'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600">Take a visual tour of our homestay</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
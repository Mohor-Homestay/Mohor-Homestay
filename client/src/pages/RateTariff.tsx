import { motion } from 'framer-motion';

const RateTariff = () => {
  const roomTypes = [
    {
      type: 'Deluxe AC Room',
      rate: '₹2,500/night',
      description: 'AC Double bed with attached bathroom',
      occupancy: '2 Adults'
    },
    {
      type: 'Standard AC Room',
      rate: '₹2,000/night',
      description: 'AC Double bed with common bathroom',
      occupancy: '2 Adults'
    },
    {
      type: 'Deluxe Non-AC Room',
      rate: '₹2,000/night',
      description: 'Non-AC Double bed with attached bathroom',
      occupancy: '2 Adults'
    },
    {
      type: 'Standard Non-AC Room',
      rate: '₹1,500/night',
      description: 'Non-AC Double bed with common bathroom',
      occupancy: '2 Adults'
    },
  ];

  const meals = {
    breakfast: ['Bread (with Butter)/Luchi', 'Aloo Dum', 'Boiled Egg', 'Tea'],
    lunch: ['Rice', 'Dal', '1 Fried item', 'Fish/Egg', 'Chatni', 'Papad', 'Sweet'],
    snacks: ['Veg Pakora', 'Tea/Coffee'],
    dinner: ['Rice/Roti', 'Mixed Veg/Any veg item', 'Chicken Curry', 'Sweet']
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rate Tariff</h1>
          <p className="text-lg text-gray-600">Our room rates and meal plans</p>
        </motion.div>

        {/* Room Rates */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomTypes.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.type}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-4">{room.rate}</p>
                <p className="text-gray-600 mb-2">{room.description}</p>
                <p className="text-gray-600">Maximum occupancy: {room.occupancy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meal Plans */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meal (₹500/head)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(meals).map(([mealTime, items], index) => (
              <motion.div
                key={mealTime}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{mealTime}</h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateTariff;
import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    members: '',
    checkIn: null as Date | null,
    checkOut: null as Date | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/send-email`, formData);
      toast.success('Thank you for your booking request! A confirmation email has been sent.');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send booking request. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Book your stay or get in touch with us</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">Taltore, Prantik, near Mobile Tower</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+918420909199</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">amarnathshee@yahoo.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Room</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="members" className="block text-sm font-medium text-gray-700">Number of Members</label>
                <input
                  type="number"
                  id="members"
                  required
                  min="1"
                  className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  value={formData.members}
                  onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                  <DatePicker
                    selected={formData.checkIn}
                    onChange={(date) => setFormData({ ...formData, checkIn: date })}
                    className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    minDate={new Date()}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
                  <DatePicker
                    selected={formData.checkOut}
                    onChange={(date) => setFormData({ ...formData, checkOut: date })}
                    className="mt-1 block w-full rounded-md border-gray-300 py-1 px-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    minDate={formData.checkIn || new Date()}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
              >
                Book a Room
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
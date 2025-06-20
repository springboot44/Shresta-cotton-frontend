import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <motion.div 
    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="bg-indigo-100 p-3 rounded-full">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      {link ? (
        <a href={link} className="text-indigo-600 hover:underline">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </motion.div>
);

const InputField = ({ label, type, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      placeholder={placeholder}
    />
  </div>
);

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-indigo-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch with Shresta Cotton Mill
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-8">
            Have any questions or inquiries? Reach out to us and we'll get back to you as soon as possible.
          </p>

          <ContactItem
            icon={MapPin}
            title="Address"
            content="456 Bellam Pally, Ginning Town, India"
          />
          <ContactItem
            icon={Mail}
            title="Email"
            content="info@shrestacottonmill.com"
            link="mailto:info@shrestacottonmill.com"
          />
          <ContactItem
            icon={Phone}
            title="Phone"
            content="+91-9876543210"
            link="tel:+919876543210"
          />

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">Find Us Here:</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1373568098076!2d78.39421567506423!3d17.44590214137484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936c6c7e68ff%3A0xd63671788a0f5f98!2sShresta%20Cotton%20Mill%2C%20Bellam%20Pally!5e0!3m2!1sen!2sin!4v1659923517793!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-800">Send Us a Message</h3>
          <form className="space-y-4">
            <InputField label="Name" type="text" placeholder="Your Name" />
            <InputField label="Email" type="email" placeholder="Your Email" />
            <InputField label="Phone" type="tel" placeholder="Your Phone Number" />
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Stresta Cotton Mill</h2>
      
      <div className="mb-8">
        <p className="text-lg text-center">
          Have any questions or inquiries? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">Contact Information:</h3>
        <p className="mt-2">Address: 123 Cotton Mill Lane, Ginning Town, India</p>
        <p>Email: <a href="mailto:info@strestacottonmill.com" className="text-blue-600 hover:underline">info@strestacottonmill.com</a></p>
        <p>Phone: +91-9876543210</p>
      </div>

      {/* Google Map */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Find Us Here:</h3>
        <div className="relative pb-2/3 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1373568098076!2d78.39421567506423!3d17.44590214137484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936c6c7e68ff%3A0xd63671788a0f5f98!2sStresta%20Cotton%20Mill!5e0!3m2!1sen!2sin!4v1659923517793!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="absolute inset-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Send Us a Message:</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Phone:</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Message:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

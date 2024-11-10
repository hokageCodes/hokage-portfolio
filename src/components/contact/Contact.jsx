import { useState, useRef, useEffect } from 'react';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close Modal on Outside Click
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section className="bg-gray-900 py-16 px-8 md:px-16 text-center">
      <h2 className="text-4xl font-semibold text-textColor mb-8">Get in Touch</h2>

      {/* Contact Details */}
      <div className="mb-8 space-y-4">
        <p className="text-lg text-textColor">📞 Phone: +123 456 7890</p>
        
        {/* WhatsApp Link */}
        <p className="text-lg text-textColor">
          💬 WhatsApp: 
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            +234 70 173 583 85
          </a>
        </p>
        
        {/* Email Link */}
        <p className="text-lg text-textColor">
          📧 Email: 
          <a
            href="mailto:ogundebusayo16@gmail.com"
            className="text-blue-500 hover:underline ml-1"
          >
            goundebusayo16@gmail.com
          </a>
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={toggleModal}
        className="bg-primary-cta-gradient text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
      >
        send us a message instead
      </button>

      {/* Modal - Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="relative bg-gray-900 p-8 rounded-lg w-full sm:w-96 max-w-lg">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="text-textColor">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-textColor">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-textColor">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message"
                  rows="4"
                  className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary-cta-gradient text-white rounded-full hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;

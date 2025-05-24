import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 10000);
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-indigo-50 to-indigo-200 flex justify-center items-center font-manrope"
    >
      <div className="max-w-7xl w-full px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center lg:text-left">
            Contact Me
          </h2>

          {emailSent ? (
            <p className="text-green-600 text-center lg:text-left text-lg font-semibold">
              Thank you! Your message has been sent.
            </p>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label className="text-lg text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all duration-200 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all duration-200 outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="title"
                  placeholder="Write your message here..."
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 h-32 resize-none transition-all duration-200 outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Social Links */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
            Let's Connect
          </h3>

          {/* Short Introduction */}
          <p className="text-gray-600 mb-4">
            I'm always open to new opportunities, collaborations, and engaging
            discussions. Feel free to reach out!
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-lg text-gray-700">
              <FaEnvelope className="text-indigo-600 w-6 h-6" />
              <a
                href="mailto:molle_g@yahoo.com"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                molle_g@yahoo.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg text-gray-700">
              <FaLinkedin className="text-blue-600 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/garrettmolle/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4 text-lg text-gray-700">
              <FaGithub className="text-gray-900 w-6 h-6" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

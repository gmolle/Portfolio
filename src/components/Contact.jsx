import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// 412 from EmailJS: usually Gmail auth scopes. Reconnect the Gmail service in EmailJS dashboard and grant all permissions.
const inputClass =
  "w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-colors";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 10000);
        },
        (err) => {
          console.error("EmailJS error:", err?.status, err?.text);
          setSubmitError(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Contact
        </h2>
        <p className="text-gray-600 mb-10">
          I'm always open to new opportunities and conversations. Reach out via
          the form or the links below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Send a message
            </h3>

            {emailSent ? (
              <div className="py-4">
                <p className="text-green-700 font-medium">
                  Thanks—your message has been sent. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="title"
                    placeholder="Your message..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>
                {submitError && (
                  <p className="text-sm text-red-600">
                    The message couldn't be sent. This is often due to email
                    service configuration—check the browser console for details,
                    or email me directly using the link on the right.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get in touch
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Prefer email or want to connect on LinkedIn or GitHub? Use the
              links below.
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:molle_g@yahoo.com"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaEnvelope className="text-gray-500 w-5 h-5 flex-shrink-0" />
                  <span>molle_g@yahoo.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/garrettmolle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaLinkedin className="text-[#0A66C2] w-5 h-5 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gmolle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="text-gray-700 w-5 h-5 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

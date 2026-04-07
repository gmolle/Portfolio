import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 shadow-sm shadow-gray-900/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 focus:border-indigo-400 transition-shadow";

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
        },
      );
  };

  const cardClass =
    "rounded-2xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-sm shadow-gray-900/5 ring-1 ring-black/[0.03]";

  const linkRowClass =
    "group flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3.5 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-sm";

  return (
    <section
      id="contact"
      className="py-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-gray-100 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Contact
            <span
              className="mt-3 block h-px w-14 max-w-full rounded-full bg-indigo-600"
              aria-hidden
            />
          </h2>
          <p className="mt-5 text-gray-600 text-base sm:text-[17px] leading-relaxed">
            I'm always open to new opportunities and conversations. Reach out
            via the form or the links below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 lg:items-start">
          <div className={cardClass}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-700 mb-1">
              Send a message
            </h3>
            <div
              className="h-px w-10 bg-indigo-500/90 rounded-full mb-6"
              aria-hidden
            />

            {emailSent ? (
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-4">
                <p className="text-emerald-900 text-[15px] font-medium leading-snug">
                  Thanks—your message has been sent. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-600 mb-1.5"
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
                    className="block text-sm font-medium text-gray-600 mb-1.5"
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
                    className="block text-sm font-medium text-gray-600 mb-1.5"
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
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200/80 rounded-xl px-3.5 py-3 leading-relaxed">
                    The message couldn't be sent. This is often due to email
                    service configuration—check the browser console for details,
                    or email me directly using the link on the right.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-sm shadow-indigo-900/15 hover:bg-indigo-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className={cardClass}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-700 mb-1">
              Get in touch
            </h3>
            <div
              className="h-px w-10 bg-indigo-500/90 rounded-full mb-4"
              aria-hidden
            />
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Prefer email or want to connect on LinkedIn or GitHub? Use the
              links below.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:molle_g@yahoo.com"
                  rel="noopener noreferrer"
                  className={linkRowClass}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors group-hover:border-indigo-200 group-hover:text-indigo-600">
                    <FaEnvelope className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-indigo-950">
                    molle_g@yahoo.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/garrettmolle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkRowClass}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#0A66C2] transition-colors group-hover:border-indigo-200">
                    <FaLinkedin className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-indigo-950">
                    LinkedIn
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gmolle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkRowClass}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-800 transition-colors group-hover:border-indigo-200">
                    <FaGithub className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-gray-800 group-hover:text-indigo-950">
                    GitHub
                  </span>
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

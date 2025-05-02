import { useState } from "react";
import {
  Mail,
  User,
  Phone,
  MessageSquare,
  Send,
  Check,
  ArrowLeft,
  Loader,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field: string) => setFocused(field);
  const handleBlur = () => setFocused(null);

  const isValid = {
    name: /^[A-Za-z ]{2,}$/.test(formData.name),
    phone: /^[0-9]{10}$/.test(formData.phone),
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    message: formData.message.trim().length > 0,
  };

  const allValid = Object.values(isValid).every(Boolean);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!allValid) return;

    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setLoading(false);
    }, 2000);
  };

  const navigateHome = () => {
    navigate("/"); // Navigate to home page
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-sky-100 to-teal-100 py-20 px-6 md:px-12 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 space-x-4">
            {/* Icon */}
            <div className="bg-white p-4 rounded-full shadow-md transform hover:rotate-12 transition duration-300">
              <Mail className="h-8 w-8 text-teal-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-teal-700 relative inline-block">
              Let's Connect
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-teal-500 rounded"></span>
            </h2>
          </div>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Got questions or want to learn more about FinReveal? Fill in the
            form and we'll get back to you soon.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-teal-500 py-4 px-6">
              <h3 className="text-white font-medium text-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send us a message
              </h3>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`relative transition-all duration-300 ${
                    focused === "name" ? "transform -translate-y-1" : ""
                  }`}
                >
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`w-full p-3 pl-10 border rounded-lg outline-none ${
                      isValid.name
                        ? "border-gray-300"
                        : "border-red-400 focus:ring-red-400"
                    } focus:ring-2 focus:ring-teal-400`}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <div
                  className={`relative transition-all duration-300 ${
                    focused === "phone" ? "transform -translate-y-1" : ""
                  }`}
                >
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={`w-full p-3 pl-10 border rounded-lg outline-none ${
                      isValid.phone
                        ? "border-gray-300"
                        : "border-red-400 focus:ring-red-400"
                    } focus:ring-2 focus:ring-teal-400`}
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <div
                  className={`relative md:col-span-2 transition-all duration-300 ${
                    focused === "email" ? "transform -translate-y-1" : ""
                  }`}
                >
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={`w-full p-3 pl-10 border rounded-lg outline-none ${
                      isValid.email
                        ? "border-gray-300"
                        : "border-red-400 focus:ring-red-400"
                    } focus:ring-2 focus:ring-teal-400`}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                  />
                </div>
              </div>

              <div
                className={`relative transition-all duration-300 ${
                  focused === "message" ? "transform -translate-y-1" : ""
                }`}
              >
                <div className="absolute left-3 top-3 text-gray-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full p-3 pl-10 border rounded-lg outline-none ${
                    isValid.message
                      ? "border-gray-300"
                      : "border-red-400 focus:ring-red-400"
                  } focus:ring-2 focus:ring-teal-400`}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={!allValid || loading}
                  className="group bg-gradient-to-r from-sky-500 to-teal-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-teal-700">Thank You!</h3>
            <p className="text-gray-700 text-lg">
              Your message has been successfully sent. We'll be in touch with
              you shortly!
            </p>
            <button
              onClick={navigateHome}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-sky-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </button>
          </div>
        )}

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>We respect your privacy and will never share your information.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

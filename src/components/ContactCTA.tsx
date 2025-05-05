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
import emailjs from "emailjs-com";

// EmailJS credentials
const SERVICE_ID = "service_kz39s49";
const TEMPLATE_ID = "template_uh7qtea";
const PUBLIC_KEY = "QVmIeL0qRKtzL5sAp";

// InputField component with type safety
interface InputFieldProps {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  focused: string | null;
  handleFocus: (field: string) => void;
  handleBlur: () => void;
  full?: boolean;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  name,
  placeholder,
  value,
  onChange,
  isValid,
  focused,
  handleFocus,
  handleBlur,
  full = false,
  type = "text",
}) => (
  <div
    className={`relative transition-all duration-300 ${
      focused === name ? "transform -translate-y-1" : ""
    } ${full ? "md:col-span-2" : ""}`}
  >
    <div className="absolute left-3 top-3 text-gray-400">{icon}</div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-3 pl-10 border rounded-lg outline-none ${
        isValid ? "border-gray-300" : "border-red-400 focus:ring-red-400"
      } focus:ring-2 focus:ring-teal-400`}
      value={value}
      onChange={onChange}
      onFocus={() => handleFocus(name)}
      onBlur={handleBlur}
      required
    />
  </div>
);

// Define a type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Define a type for the form summary
interface FormSummary extends FormData {
  responseStatus: number;
  responseText: string;
  submittedAt: string;
}

// ContactCTA Component
const ContactCTA = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSummary, setFormSummary] = useState<FormSummary | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Clear any previous errors
    setSubmitError(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allValid) return;

    // Double-check all required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setSubmitError("All fields are required. Please check your form.");
      return;
    }

    setLoading(true);
    setSubmitError(null);

    // Make sure all field names match exactly what EmailJS expects in the template
    const templateParams = {
      name: formData.name, // Changed from from_name to name
      email: formData.email, // Changed from from_email to email
      phone: formData.phone,
      message: formData.message,
      to_name: "FinReveal Team", // Added recipient name
      subject: "New FinReveal Inquiry",
      reply_to: formData.email, // For reply functionality
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      // Store the form summary for display in the thank you message
      setFormSummary({
        ...formData,
        responseStatus: response.status,
        responseText: response.text,
        submittedAt: new Date().toLocaleString(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError(
        "There was an error sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const navigateHome = () => {
    navigate("/");
    setSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setFormSummary(null);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormSummary(null);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-sky-100 to-teal-100 py-20 px-6 md:px-12 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <div className="bg-white p-4 rounded-full shadow-md transform hover:rotate-12 transition duration-300">
              <Mail className="h-8 w-8 text-teal-600" />
            </div>
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
          <form
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="bg-gradient-to-r from-sky-500 to-teal-500 py-4 px-6">
              <h3 className="text-white font-medium text-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send us a message
              </h3>
            </div>

            <div className="p-8 space-y-6">
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={<User className="h-5 w-5" />}
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  isValid={formData.name === "" || isValid.name}
                  focused={focused}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                />
                <InputField
                  icon={<Phone className="h-5 w-5" />}
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  isValid={formData.phone === "" || isValid.phone}
                  focused={focused}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  type="tel"
                />
                <InputField
                  icon={<Mail className="h-5 w-5" />}
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  isValid={formData.email === "" || isValid.email}
                  focused={focused}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  full
                  type="email"
                />
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
                    formData.message === "" || isValid.message
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

              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-sky-500 to-teal-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 ${
                  !allValid || loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-sky-600 hover:to-teal-600"
                }`}
                disabled={!allValid || loading}
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Check className="text-green-500 h-10 w-10" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-teal-700 mb-4">
              Message Sent Successfully!
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                Your message details:
              </h4>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Name:</span> {formSummary?.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {formSummary?.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {formSummary?.phone}
                </p>
                <p>
                  <span className="font-medium">Message:</span>{" "}
                  {formSummary?.message}
                </p>
                <p>
                  <span className="font-medium">Submitted:</span>{" "}
                  {formSummary?.submittedAt}
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Thank you for reaching out! A member of our team will get back to
              you soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                onClick={navigateHome}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </button>
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition"
                onClick={resetForm}
              >
                <MessageSquare className="h-4 w-4" />
                Send Another Message
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactCTA;

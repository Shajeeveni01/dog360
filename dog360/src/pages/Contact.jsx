import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out! 🐶");
    setFormData({ fullName: "", email: "", comment: "" });
  };

  return (
    <div className="relative min-h-screen"> {/* ✅ Wrap everything inside a relative container */}
      
      {/* ✅ Background with Overlay (Ensures Navigation is Clickable) */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10" // ✅ Keeps the background behind other elements
        style={{ backgroundImage: "url('/dog-contact-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div> {/* ✅ Keeps overlay behind the form */}
      </div>

      {/* ✅ Contact Form (Centered & Above Background) */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-xl shadow-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Contact Us 🐾</h2>
          <p className="text-gray-500 text-center mt-1">We’d love to hear from you!</p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-gray-600 block mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 shadow-sm"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 shadow-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-600 block mb-1">Message</label>
              <textarea
                name="comment"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 shadow-sm h-24"
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg text-lg font-semibold transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:dercioarmandocc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="md:pl-45 text-white luamRegular pb-40 bg-cover bg-center pt-45"
      style={{ backgroundImage: "url('/Map.jpg')" }}
    >
      <div className="relative max-w-2xl mx-auto px-4 text-center text-white backdrop-blur-md bg-white/10 pt-4  rounded-2xl">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-5 luamRegular">
          Interested?
        </h2>
        <hr className="w-32 border-t-4 mx-auto mb-10" />
        <p className="mb-5 text-2xl text-gray-200">
          Let’s get in touch! Fill out the form below and I’ll get back to you
          as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-8 text-2xl" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none focus:border-white text-white placeholder-gray-400 py-2 text-center"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none focus:border-white text-white placeholder-gray-400 py-2 text-center"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none focus:border-white text-white placeholder-gray-400 py-2 text-center resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600/90 px-4 py-3 font-medium text-white hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

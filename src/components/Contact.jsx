import React from "react";

export default function Contact() {
  return (
    <section
      className="py-40 md:pl-13 text-white luamRegular pb-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/Map.jpg')" }} // <- change path
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* dark overlay */}
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
        <form className="p-8 space-y-8 text-2xl">
          {/* Name */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
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

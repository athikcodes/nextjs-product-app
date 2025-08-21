"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 rounded px-4 mt-8 max-w-10/12 m-auto">
      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-400 rounded-full opacity-20"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Explore Cutting-Edge Tech
        </h1>

        <p className="mt-4 text-gray-100 text-base md:text-lg max-w-xl mx-auto">
          Discover the latest gadgets, laptops, smartphones, cameras, and more. Upgrade your tech lifestyle with top products handpicked for you!
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#products"
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden font-poppins">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-3 text-zinc-900">
          <span className="material-symbols-outlined text-3xl text-green-500">
            solar_power
          </span>
          <h2 className="text-xl font-bold">Solar Solutions</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-base font-medium text-zinc-900 hover:text-green-500 transition-colors">
            Home
          </a>
          <a href="#" className="text-base font-medium text-zinc-900 hover:text-green-500 transition-colors">
            Services
          </a>
          <a href="#" className="text-base font-medium text-zinc-900 hover:text-green-500 transition-colors">
            Projects
          </a>
          <a href="#" className="text-base font-medium text-zinc-900 hover:text-green-500 transition-colors">
            About Us
          </a>
          <a href="#" className="text-base font-medium text-zinc-900 hover:text-green-500 transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="min-w-[120px] max-w-[480px] h-12 px-6 bg-green-500 text-white rounded-full font-bold shadow-md hover:bg-green-600 transition-all duration-300">
            Get a Quote
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <span className="material-symbols-outlined text-3xl text-zinc-900">
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="relative min-h-[60vh] flex items-center justify-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmVOVM39mxjSvwJZfmTcGS5r6bZBXv4ARq83si-EgfVADPnvmaEizF_RGeOqC7J3xqvVRWgJ6TNmc5KB72AhC1mJQ4Om7YEavMpS2XXdKKxEDTAH2qaKZ81DjyrCRb9RIpY9aNz9VVfxAY-HYCSPWDNLdPC7samx9mg_OAZU-NWjeUOuvR-Vu96kNyrYw7bN7lUm_lgNPcK8SissLLTLDgwXXN_t6VoGEXrJYMHp6UMwzdLXKfhvisZUH05BgK1_Qr78rthsQfXTJ9")',
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Empowering a Sustainable Future
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              We provide innovative solar energy solutions for homes and
              businesses, driving a cleaner, greener tomorrow.
            </p>
            <button className="mx-auto min-w-[150px] max-w-[480px] h-14 px-8 bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-5xl text-green-500 mb-4">
              rocket_launch
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Mission</h2>
            <p className="text-lg text-zinc-600">
              To accelerate the transition to clean energy by delivering
              reliable, cost-effective solar solutions that empower individuals
              and communities to embrace a sustainable lifestyle.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-5xl text-blue-500 mb-4">
              visibility
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Vision</h2>
            <p className="text-lg text-zinc-600">
              To be the leading provider of solar energy solutions, recognized
              for our commitment to quality, innovation, and environmental
              stewardship, creating a world powered by clean, renewable energy.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Sustainability",
                  icon: "eco",
                  color: "green",
                  description:
                    "We are dedicated to minimizing environmental impact and promoting sustainable practices in all our operations.",
                },
                {
                  title: "Customer Focus",
                  icon: "groups",
                  color: "blue",
                  description:
                    "Our customers are at the heart of everything we do. We strive to exceed their expectations with personalized service and support.",
                },
                {
                  title: "Reliability",
                  icon: "shield",
                  color: "yellow",
                  description:
                    "We deliver dependable solar solutions that stand the test of time, ensuring long-term performance and peace of mind.",
                },
                {
                  title: "Innovation",
                  icon: "auto_awesome",
                  color: "purple",
                  description:
                    "We continuously explore new technologies and approaches to enhance our offerings and drive the advancement of solar energy.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className={`bg-${item.color}-100 p-4 rounded-full mb-4`}>
                    <span
                      className={`material-symbols-outlined text-3xl text-${item.color}-500`}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story, Team, Why Choose Us, CTA Sections */}
        {/* You can continue similarly by converting each section into JSX */}
      </main>
    </div>
  );
};

export default AboutUs;

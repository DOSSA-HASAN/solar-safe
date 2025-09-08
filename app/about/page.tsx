import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Rocket, Shield, Star, Sun, Users } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden font-poppins">
            <main className="flex-1">
                <div className="relative min-h-[60vh] flex items-center justify-center text-white">
                    <div className="absolute inset-0 bg-cover bg-center">
                        <Image src={'/about-bg.png'} fill className="object-cover" alt="Solar panels picture" />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                            Empowering a Sustainable Future
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                            We provide innovative solar energy solutions for homes and
                            businesses, driving a cleaner, greener tomorrow.
                        </p>
                        <Link
                            href="/products"
                            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="material-symbols-outlined text-5xl text-green-500 mb-4">
                            <Rocket className="m-auto mb-10" size={50} />
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
                            <Eye className="m-auto mb-10" size={50} />
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
                                    icon: <Sun size={50} />,
                                    color: "green",
                                    description:
                                        "We are dedicated to minimizing environmental impact and promoting sustainable practices in all our operations.",
                                },
                                {
                                    title: "Customer Focus",
                                    icon: <Users size={50} />,
                                    color: "blue",
                                    description:
                                        "Our customers are at the heart of everything we do. We strive to exceed their expectations with personalized service and support.",
                                },
                                {
                                    title: "Reliability",
                                    icon: <Shield size={50} />,
                                    color: "yellow",
                                    description:
                                        "We deliver dependable solar solutions that stand the test of time, ensuring long-term performance and peace of mind.",
                                },
                                {
                                    title: "Innovation",
                                    icon: <Star size={50}/>,
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

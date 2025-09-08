"use client"; // because this page uses state + fetch

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: inquiry,
          type: "Inquiry",
          subject: "Solar Panel Inquiry",
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setInquiry("");
      } else {
        alert("❌ Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-10 py-10 max-w-[1440px] w-full m-auto">
      <h1 className="font-bold text-[#0F1417] text-[35px]">Learn More</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="relative w-full lg:w-[50%] h-[300px]">
          <Image
            src="/solar-image.svg"
            fill
            alt="Solar image"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="lg:space-x-20 space-y-6 lg:w-[40%]">
          <h2 className="font-bold text-[#0F1417] text-[25px] lg:text-[35px]">
            Solar Panels Inquiry
          </h2>
          <p className="text-[#5C738A]">
            Power your home or business with reliable, high-efficiency solar
            panels. We provide durable and affordable solutions to help you save
            on energy costs while protecting the planet. Get the best panels and
            trusted installation from us today.
          </p>
          <Link
            className="hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold"
            href={"/products"}
          >
            Visit products page
          </Link>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <h2 className="font-bold text-[#0F1417] text-[25px]">
          Get a Personalized Quote
        </h2>

        {/* Name */}
        <div className="flex flex-col justify-start items-start w-full">
          <label htmlFor="name" className="text-[#0F1417]">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none"
          />
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
          <div className="flex flex-col justify-start items-start w-full lg:w-[40%]">
            <label htmlFor="email" className="text-[#0F1417]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-start w-full lg:w-[40%]">
            <label htmlFor="telNum" className="text-[#0F1417]">
              Phone Number
            </label>
            <input
              type="tel"
              id="telNum"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Inquiry */}
        <div className="flex flex-col justify-start items-start w-full">
          <label htmlFor="inquiry" className="text-[#0F1417]">
            Inquiry Description
          </label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            required
            className="w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none h-[200px]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && (
          <p className="text-green-600 font-semibold">
            ✅ Your inquiry has been sent!
          </p>
        )}
      </form>
    </section>
  );
}

export default Page;

"use client"; // 👈 so we can use useState & handleSubmit

import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    type: "Contact",
                }),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                console.error("❌ Failed to send");
            }
        } catch (err) {
            console.error("❌ Error:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='px-10 py-10 max-w-[1440px] w-full m-auto flex justify-between items-start lg:flex-row flex-col'>
            <div>
                <h1 className='font-bold text-[#0F1417] text-[35px]'>Contact us</h1>
                <p className='text-[#0F1417]'>We&apos;re here to help! Reach out to us with any questions or feedback.</p>

                <form onSubmit={handleSubmit} className='mt-10 space-y-7'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder='Enter your name'
                            required
                            className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder='Enter your email'
                            required
                            className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="subject">Your Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder='Enter the subject'
                            required
                            className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder='Enter your message'
                            required
                            className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none h-[200px]'
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold'
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-green-600">✅ Message sent successfully!</p>}
                </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-10 lg:w-[40%] mt-10 lg:mt-0'>
                <h2 className='font-bold text-[#0F1417] text-[35px]'>Contact Information</h2>
                <div className='flex items-center space-x-10'>
                    <div className='bg-gray-200 p-3 rounded-md'><Phone /></div>
                    <div>
                        <p className='text-[#0F1417]'>Phone</p>
                        <p className='text-gray-500'>+254 123456789</p>
                    </div>
                </div>
                <div className='flex items-center space-x-10'>
                    <div className='bg-gray-200 p-3 rounded-md'><Mail /></div>
                    <div>
                        <p className='text-[#0F1417]'>Email</p>
                        <p className='text-gray-500'>info@solarsafe-solutions.com</p>
                    </div>
                </div>
                <div className='flex items-center space-x-10'>
                    <div className='bg-gray-200 p-3 rounded-md'><MapPin /></div>
                    <div>
                        <p className='text-[#0F1417]'>Location</p>
                        <p className='text-gray-500'>Nairobi, Kenya</p>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390057124!2d36.68258063428093!3d-1.3032035600023761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1757324192989!5m2!1sen!2ske"
                        width="300"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='w-full rounded-md'
                    />
                </div>
            </div>
        </section>
    )
}

export default Page;

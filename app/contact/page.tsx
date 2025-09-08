import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <section className='px-10 py-10 max-w-[1440px] w-full m-auto flex justify-between items-start lg:flex-row flex-col'>
            <div>
                <h1 className='font-bold text-[#0F1417] text-[35px]'>Contact us</h1>
                <p className='text-[#0F1417]'>We&apos;re here to help! Reach out to us with any questions or feedback.</p>
                <form action="" className='mt-10 space-y-7'>
                    <div className='flex flex-col justify-start items-start w-full space-y-2'>
                        <label htmlFor="name" className='text-[#0F1417]'>Name</label>
                        <input type="text" id='name' placeholder='Enter your name' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full space-y-2'>
                        <label htmlFor="email" className='text-[#0F1417]'>Email</label>
                        <input type="email" id='email' placeholder='Enter your email' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full space-y-2'>
                        <label htmlFor="subject" className='text-[#0F1417]'>Your Subject</label>
                        <input type="text" id='subject' placeholder='Enter the subject' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full space-y-2'>
                        <label htmlFor="message" className='text-[#0F1417]'>Your Message</label>
                        <input type="text" id='message' placeholder='Enter your message' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                    <button className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold'>Send Message</button>
                </form>
            </div>
            <div className='space-y-10 lg:w-[40%] mt-10 lg:mt-0'>
                <h2 className='font-bold text-[#0F1417] text-[35px]'>Contact Information</h2>
                <div className='flex justify-start items-center space-x-10'>
                    <div className='bg-gray-200 p-3 rounded-md'><Phone /></div>
                    <div className='w-full'>
                        <p className='text-[#0F1417]'>Phone</p>
                        <p className='text-gray-500'>+254 123456789</p>
                    </div>
                </div>
                <div className='flex justify-start items-center space-x-10 '>
                    <div className='bg-gray-200 p-3 rounded-md'><Mail /></div>
                    <div>
                        <p className='text-[#0F1417]'>Email</p>
                        <p className='text-gray-500'>solarsafe@gmail.com</p>
                    </div>
                </div>
                <div className='flex justify-start items-center space-x-10 '>
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

export default page

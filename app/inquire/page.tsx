import { pageProps } from '@/app/products/[id]/page'
import { products } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function page() {

    return (
        <section className='px-10 py-10 max-w-[1440px] w-full m-auto'>
            <h1 className='font-bold text-[#0F1417] text-[35px]'>Learn More</h1>
            <div className='flex flex-col lg:flex-row justify-between items-start'>
                <div className='relative w-full lg:w-[50%] h-[300px]'>
                    <Image src='/solar-image.svg' fill alt='Solar image' className='object-cover rounded-lg' />
                </div>
                <div className='lg:space-x-20 space-y-6 lg:w-[40%]'>
                    <h2 className='font-bold text-[#0F1417] text-[25px] lg:text-[35px]'>Solar Panels Inquiry</h2>
                    <p className='text-[#5C738A]'>Power your home or business with reliable, high-efficiency solar panels. We provide durable and affordable solutions to help you save on energy costs while protecting the planet. Get the best panels and trusted installation from us today.</p>
                    <Link className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold' href={'/products'}>Visit products page</Link>
                </div>
            </div>
            <form action="" className='mt-10 space-y-5'>
                <h2 className='font-bold text-[#0F1417] text-[25px]'>Get a Personalized Quote</h2>
                <div className='flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0'>
                    <div className='flex flex-col justify-start items-start w-full lg:w-[40%]'>
                        <label htmlFor="email" className='text-[#0F1417]'>Email</label>
                        <input type="email" id='email' placeholder='Enter your email' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                    <div className='flex flex-col justify-start items-start w-full lg:w-[40%]'>
                        <label htmlFor="telNum" className='text-[#0F1417]'>Phone Number</label>
                        <input type="tel" id='telNum' placeholder='Enter your Phone Number' required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none' />
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start w-full'>
                    <label htmlFor="inquiry" className='text-[#0F1417]'>Inquiry Description</label>
                    <input type="text" id='inquiry'  required className='w-full p-3 bg-[#EBEDF2] rounded-md focus:outline-none h-[200px]' />
                </div>
                <button className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold'>Submit</button>
            </form>
        </section>
    )
}

export default page

import { Product, products } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type pageProps = {
    params: { id: string }
}

function page({ params }: pageProps) {

    const { id } = params
    const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return (
            <section className='px-10 py-10 max-w-[1440px] w-full m-auto flex flex-col justify-center items-center'>
                <h1 className='w-full text-center font-bold text-[#0F1417] text-[50px]'>Product Not Found</h1>
                <p>Click <Link href={'/products'} className='text-blue-500 text-center'>here</Link> to return to the products page</p>
            </section>
        )

    }
    return (
        <section className='px-10 py-10 max-w-[1440px] w-full m-auto'>
            <div className='w-full h-[400px] relative'>
                <Image src={product.image} fill alt={product.description} className='object-cover rounded-lg' />
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-[#0F1417] text-[35px]'>Overview</h1>
                <p className='text-[#0F1417]'>{product.overview}</p>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-[#0F1417] text-[35px]'>Key Features</h1>
                <ul className='flex justify-start items-center mt-5 border-t border-b w-full border-gray-300 py-5'>
                    <li className='w-[250px]'>
                        <p className='text-[#5C738A]'>Power Output</p>
                        <p className='text-[#0F1417]'>{product.powerOutput}</p>
                    </li>
                    <li className='w-[100px]'>
                        <p className='text-[#5C738A]'>Efficiency</p>
                        <p className='text-[#0F1417]'>{product.efficiency}</p>
                    </li>
                </ul>
                <ul className='flex justify-start items-center mt-5 mb-5 border-b w-full border-gray-300 py-5'>
                    <li className='w-[250px]'>
                        <p className='text-[#5C738A]'>Dimensions</p>
                        <p className='text-[#0F1417]'>{product.dimensions}</p>
                    </li>
                    <li className='w-[100px]'>
                        <p className='text-[#5C738A]'>Weight</p>
                        <p className='text-[#0F1417]'>{product.weight}</p>
                    </li>
                </ul>
                <ul className='flex justify-start items-center mt-5 mb-5 border-b w-full border-gray-300 py-5'>
                    <li className='w-[250px]'>
                        <p className='text-[#5C738A]'>Warranty</p>
                        <p className='text-[#0F1417]'>{product.warranty}</p>
                    </li>
                </ul>
            </div>
            <Link className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold' href={'/inquire'}>Inquire</Link>
        </section>
    )
}

export default page

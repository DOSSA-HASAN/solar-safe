import { products } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='px-10 py-10 max-w-[1440px] w-full m-auto'>
      <h1 className='font-bold text-[#0F1417] text-[35px]'>Our Solar Products</h1>
      <p className='text-[#5C738A]'>Explore our range of high-quality solar panels and accessories to power your home or business sustainably.</p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-7 mt-10'>
        {
          products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className='w-full flex flex-col justify-start items-start'>
              <Image src={product.image} alt={product.description} height={100} width={100} className='w-[200px] rounded-md h-[200px]'/>
              <h3 className='text-[#0F1417] font-semibold text-[18px] mt-2 mb-1 w-[200px]'>{product.name}</h3>
              <p className='text-[14px] text-[#5C738A] w-[200px]'>{product.description}</p>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default page

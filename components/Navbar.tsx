'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Header from './Header'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <>
            <Header />
            <nav aria-label='Main navigation' className='bg-transparent hidden lg:flex max-w-[1440px] m-auto justify-between items-center px-4 py-3 border-b-1 border-gray-200'>
                <Link href={'/'} className='w-50 h-auto'>
                    <Image className='w-full h-full' src={'/logo.svg'} width={140} height={140} alt='Solar Safe Solutions Logo' priority />
                </Link>
                <ul className='flex justify-center items-center space-x-10 font-medium text-[16px]'>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/products'} >Products</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >Services</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >About Us</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >Projects</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/contact'} >Contact</Link></li>
                    <li className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold'><Link href={'/inquire'} >Get Quote</Link></li>
                </ul>
            </nav>
            <nav aria-label='Mobile navigation' className={`bg-white lg:hidden w-full flex justify-between items-center flex-col shadow-md overflow-hidden transform transition-all duration-300 ${isMenuOpen ? 'h-110 pb-6' : 'h-18'}`}>
                <div className='flex justify-between items-center w-full px-4 py-3 mb-10'>
                    <Link href={'/'} className='w-50 h-auto'>
                        <Image className='w-full h-full' src={'/logo.svg'} width={140} height={140} alt='Jaffery Medical Clinic Mombasa Logo' priority />
                    </Link>
                    <button aria-controls='mobile-menu' aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {
                            isMenuOpen ? <X /> : <Menu />
                        }
                    </button>
                </div>
                <ul id='mobile-menu' className='flex flex-col justify-center items-center space-y-7 font-medium text-[16px]'>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/products'} >Products</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >Services</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >About Us</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/'} >Projects</Link></li>
                    <li className='hover:text-gray-700 text-[#0F1417]'><Link href={'/contact'} >Contact</Link></li>
                    <li className='hover:text-gray-700 bg-[#DBE8F2] hover:bg-[#DBE8F2]/60 px-4 py-2 rounded-md font-bold'><Link href={'/inquire'} >Get Quote</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

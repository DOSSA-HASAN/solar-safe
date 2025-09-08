import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='hidden md:flex w-full bg-[#DEC385] justify-center items-center px-4 py-2'>
            <div className='m-auto flex justify-between items-center max-w-[1440px] w-full'>
                <Image src={'/logo-no-text.svg'} height={50} width={50} alt='Solar Safe Logo' />
                <ul className='flex justify-center items-center space-x-10 text-[14px]'>
                    <li className='hover:text-gray-700 text-[#171712]'>solarsafe@gmail.com</li>
                    <li className='hover:text-gray-700 text-[#171712]'>Nairobi, Kenya</li>
                    <li className='hover:text-gray-700 text-[#171712]'>+254 712 345678</li>
                    <ul className='flex justify-center items-center space-x-3'>
                        <li className='hover:text-gray-700 text-[#171712] rounded-md bg-[#F5F5F0] p-2'><Link href={'/'} ><Mail size={20} /></Link></li>
                        <li className='hover:text-gray-700 text-[#171712] rounded-md bg-[#F5F5F0] p-2'><Link href={'/'} ><MapPin size={20} /></Link></li>
                        <li className='hover:text-gray-700 text-[#171712] rounded-md bg-[#F5F5F0] p-2'><Link href={'/'} ><Phone size={20} /></Link></li>
                    </ul>
                </ul>
            </div>
        </header>
    )
}

export default Header

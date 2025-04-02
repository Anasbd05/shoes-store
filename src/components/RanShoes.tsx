import {shoes} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RanShoes = () => {
    return (
        <main className="mt-14 mb-6 px-4 md:px-0">
            <h1 className='text-neutral-800 mb-8 text-center font-header text-4xl font-semibold'>RELATED PRODUCTS</h1>
            <main className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-3'>
                {shoes.sort(() => Math.random() - 0.5).slice(0,4).map((shoe) => (
                    <Link href={`/shoes/${shoe.title.replaceAll(' ','')}`} key={shoe.id} className='bg-gray-50 rounded-md shadow-md  pb-3'>
                        <Image src={shoe.image} className="w-80 h-64 bg-gray-100  brightness-90 " alt="" />
                        <h1 className="text-xl px-2 font-bold">{shoe.title}</h1>
                        <h1 className="text-accent px-2 font-medium font-mono">{shoe.price}DH</h1>
                    </Link>
                ))}

            </main>
        </main>
    )
}

export default RanShoes

import {BestSeller} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DisplayBest = () => {
    return (
        <section className='w-full px-2 my-10'>
            <div className="flex items-center mb-6 flex-col gap-2">
                <h1 className='text-4xl text-center md:text-7xl lg:text-6xl font-header font-bold'><span className='text-accent'>Best</span> Seller</h1>
                <p className='text-gray-700 text-center max-w-2xl'>
                    Discover our best-selling products, loved by customers for their quality and popularity. Shop top-rated items that stand out for their exceptional value and performance.
                </p>
            </div>
            <main className="grid mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-4 sm:gap-4">
                {BestSeller.map((shoe) => (
                    <Link href={`/shoes/${shoe.title.replaceAll(" ",'')}`} className='pb-4 hover:ring ring-accent cursor-pointer rounded-md' key={shoe.id}>
                        <Image className='brightness-90 rounded-t-md h-60 bg-gray-200' src={shoe.image} alt='' />
                        <h1 className='px-2 font-bold text-lg'>{shoe.title}</h1>
                        <h3 className='text-accent px-2 font-mono font-semibold'>{shoe.price.toFixed(2)} DH</h3>
                    </Link>
                ))}
            </main>
        </section>
    )
}

export default DisplayBest
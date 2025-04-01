import Image from 'next/image'
import React from 'react'
import shoe from "@/assets/shoe-16.png"

const Hero = () => {
    return (
        <section className='w-10/12 mx-auto mb-10'>
            <main className='my-5 bg-gray-100 rounded-sm flex lg:flex-row flex-col h-96 items-center w-full px-6 py-4'>
                <div className="flex flex-col gap-6">
                    <h1 className='text-6xl font-header font-bold'>Discover our shoes</h1>
                    <p>Elevate your style and comfort with our latest collection of high-quality shoes.
                        Whether for sports, casual wear, or a bold fashion statement, find the perfect fit today!
                    </p>
                    <button className='bg-accent hover:opacity-80 py-2 px-6 w-60 text-white'>Shop Now</button>
                </div>
                <Image src={shoe} className='w-[700px] h-[400px] ' alt='' width={500} height={500} />
            </main>
        </section>
    )
}

export default Hero

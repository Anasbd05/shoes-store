import Image from 'next/image'
import React from 'react'
import shoe from "@/assets/shoe-16.png"

const Hero = () => {
    return (
        <section className='w-10/12 mx-auto mb-10'>
            <main className='my-5 bg-gray-100 rounded-sm lg:gap-4 flex lg:flex-row flex-col lg:h-96 h-full items-center w-full px-6 py-4'>
                <div className="flex flex-col gap-4 lg:gap-6">
                    <h1 className='text-4xl md:text-7xl lg:text-6xl font-header font-bold'>Discover our shoes</h1>
                    <p className=' text-sm md:text-xl lg:text-base text-justify'>Elevate your style and comfort with our latest collection of high-quality shoes.
                        Whether for sports, casual wear, or a bold fashion statement, find the perfect fit today!
                    </p>
                    <button className='bg-accent hover:opacity-80 py-2 px-6 lg:w-60 lg:flex justify-center hidden text-white'>Shop Now</button>
                </div>
                <Image src={shoe} className='lg:w-[700px] object-cover md:w-[500px] lg:h-[400px] h-full ' alt='' width={500} height={500} />
                <button className='bg-accent hover:opacity-80 py-2 px-8 md:w-80 justify-center lg:hidden flex text-white'>Shop Now</button>
            </main>
        </section>
    )
}

export default Hero

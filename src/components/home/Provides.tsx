import {provides} from '@/assets/assets'
import React from 'react'

const Provides = () => {
    return (
        <section className='my-14 w-4/5 mx-auto'>
            <h1 className='text-3xl text-center md:text-5xl lg:text-4xl font-header font-bold mb-10'>What We Provide to Our Customers</h1>
            <div className="flex w-full flex-wrap gap-y-5 justify-around">
                {provides.map((provide) => (
                    <div key={provide.title} className="flex items-center flex-col gap-3">
                        {provide.icon}
                        <p className='text-gray-700 text-lg'>{provide.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Provides

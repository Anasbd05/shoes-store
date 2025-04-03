import React from 'react'

const Map = () => {
    return (
        <section className='my-14 w-full flex flex-col items-center '>
            <div className="flex items-center mb-6 flex-col gap-2">
                <h1 className='text-4xl text-center md:text-7xl lg:text-6xl font-header font-bold'>Locate Our Store on the Map</h1>
                <p className='text-gray-700 text-center max-w-xl'>Easily find our store with our interactive map. Get directions and explore nearby landmarks for a hassle-free visit.</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1738579.7910080906!2d-10.324081506533382!3d31.670420554546396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef1c53c40971%3A0x601b8ac5dd249091!2sshoes%20style%20Marrakech!5e0!3m2!1sen!2sma!4v1743662125841!5m2!1sen!2sma"
                width="1000" height="460"
                className='border-none w-[350px] sm:w-[600px] md:w-[750px] lg:w-[1000px] ' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}

export default Map

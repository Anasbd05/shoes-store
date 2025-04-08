import Sidebar from '@/components/Sidebar'
import React from 'react'

const AddPage = () => {
    return (
        <section className='w-full h-screen flex gap-5'>
            <Sidebar />
            <div className="w-5/6 ml-auto p-5">
                <h1 className='text-3xl font-header font-bold'>Add Products</h1>
                <main className='flex gap-4 flex-col w-3/5 my-8'>
                    <div className="flex flex-col">
                        <label className='text-gray-700' >Shoe name</label>
                        <input placeholder='Type Here!' className='py-1.5 px-3 border border-gray-400 rounded-sm' type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className='text-gray-700' >Shoe description</label>
                        <input placeholder='Type Here!' className='py-1.5 px-3 border border-gray-400 rounded-sm' type="text" />
                    </div>
                    <div className="flex flex-col w-1/4">
                        <label className='text-gray-700' >Shoe Price</label>
                        <input placeholder='Type Here!' className='py-1.5 px-3 border border-gray-400 rounded-sm' type="number" />
                    </div>
                    <div className="flex-col flex mt-3">
                        <label className='text-gray-700' >Shoe sizes</label>
                        <div className="flex gap-2">
                            <button className='bg-black h-8 w-8 text-white'>38</button>
                            <button className='bg-black h-8 w-8 text-white'>39</button>
                            <button className='bg-black h-8 w-8 text-white'>40</button>
                            <button className='bg-black h-8 w-8 text-white'>41</button>
                            <button className='bg-black h-8 w-8 text-white'>42</button>
                            <button className='bg-black h-8 w-8 text-white'>43</button>
                            <button className='bg-black h-8 w-8 text-white'>44</button>
                        </div>
                    </div>
                    <button className='bg-accent text-white py-2 w-32 rounded-sm'>Add Now</button>
                </main>
            </div>
        </section>
    )
}

export default AddPage

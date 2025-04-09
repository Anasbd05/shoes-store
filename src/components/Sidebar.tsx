import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='lg:w-1/6 hidden lg:flex flex-col h-screen fixed py-4 ring ring-black rounded-tr-lg '>
            <Link href={"/admin"} className='text-4xl font-header font-bold p-5'>Admin</Link>
            <hr className='my-6 border-none h-[.5px] bg-neutral-500 w-full ' />
            <main className="flex flex-col gap-4">
                <Link href={"/admin"} className='px-5 hover:text-accent'>See Orders</Link>
                <Link href={"/admin/addproducts"} className='px-5 hover:text-accent'>Add products</Link>

            </main>
        </div>
    )
}

export default Sidebar

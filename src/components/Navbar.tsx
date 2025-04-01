import {Search,ShoppingCart} from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-4.5 px-8 border-b border-gray-200 shadow-lg w-full justify-between flex items-center'>
            <h1 className='text-4xl font-bold font-header'><span className='text-accent'>Air</span>talee</h1>
            <div className='flex rounded-xl w-4/6 py-1 border-2'>
                <input type="text" className='outline-none w-full px-4 border-none' />
                <button className='mx-2  px-2'>
                    <Search />
                </button>
            </div>
            <ShoppingCart />
        </nav>
    )
}

export default Navbar

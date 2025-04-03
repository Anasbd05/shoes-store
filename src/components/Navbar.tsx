"use client"
import {Search,ShoppingCart} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {useCart} from 'react-use-cart'

const Navbar = () => {

    const {items} = useCart()

    return (
        <nav className='py-4.5 px-8 border-b border-gray-200 shadow-lg w-full justify-between flex items-center'>
            <Link href={"/"}>
                <h1 className='text-4xl font-bold font-header'>
                    <span className='text-accent'>Air</span>talee
                </h1>
            </Link>
            <div className='hidden sm:flex rounded-xl  w-4/6 py-1 border-2'>
                <Search className='mx-2' />
                <input type="text" className='outline-none w-full px-1 border-none' />
            </div>
            <Link href={"/shoppingcart"}>
                {items.length > 0 ? <small className='absolute h-4 top-4 right-5 w-4 flex items-center justify-center rounded-full text-white  bg-accent'>
                    {items.length}
                </small> : ""
                }

                <ShoppingCart className='relative' />
            </Link>
        </nav>
    )
}

export default Navbar

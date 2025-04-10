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
            <div className="flex items-center gap-2">
                <Link href={"/admin"} className='ring ring-neutral-300 bg-gray-100 py-1 px-4 rounded-xl'>Admin</Link>
                <Link href={"/shoppingcart"}>
                    {items.length > 0 ? <small className='absolute h-4 top-4 right-5 w-4 flex items-center justify-center rounded-full text-white  bg-accent'>
                        {items.length}
                    </small> : ""
                    }
                    <ShoppingCart className='relative' />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

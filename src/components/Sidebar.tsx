import {CirclePlus,LogOut,MenuIcon,PackageSearch,Store,X} from 'lucide-react'
import Link from 'next/link'
import React,{useState} from 'react'

const Sidebar = () => {

    const [open,setOpen] = useState(false)

    return (
        <>
            <section className='fixed h-screen flex-col lg:flex hidden lg:w-1/5 border-r border-black'>
                <div className="flex flex-col">
                    <h1 className='text-xl py-8 px-4 mb-5 bg-gray-200 font-bold'>ADMIN PANNEL</h1>
                    <main className='flex flex-col gap-2'>
                        <Link href={"/admin"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <PackageSearch className='w-5 h-5' />
                            <span >ALL Orders</span>
                        </Link>
                        <Link href={"/admin/addproducts"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <CirclePlus className='w-5 h-5' />
                            <span >ADD Products</span>
                        </Link>
                        <Link href={"/admin/allproducts"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <Store className='w-5 h-5' />
                            <span >ALL Products</span>
                        </Link>
                        <Link href={"/"} className='flex py-2 hover:bg-red-200 hover:text-red-600 px-4 items-center gap-2'>
                            < LogOut className='w-5 h-5' />
                            <span>Logout</span>
                        </Link>
                    </main>
                </div>
            </section>
            <MenuIcon className='absolute w-7 h-7 mt-4 flex lg:hidden m-1' onClick={() => setOpen(true)} />
            <section className={`fixed h-screen  bg-white z-50  border-r border-black ${open ? "flex flex-col w-3/5" : "hidden"} `}>
                <div className="flex flex-col">
                    <X className='absolute m-1 mt-4 place-self-end w-7 h-7 mb-2 ' onClick={() => setOpen(false)} />
                    <h1 className='text-xl py-8 px-4 mb-5 bg-gray-200 font-bold'>ADMIN PANNEL</h1>
                    <main className='flex flex-col gap-2'>
                        <Link href={"/admin"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <PackageSearch className='w-5 h-5' />
                            <span >ALL Orders</span>
                        </Link>
                        <Link href={"/admin/addproducts"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <CirclePlus className='w-5 h-5' />
                            <span >ADD Products</span>
                        </Link>
                        <Link href={"/admin/allproducts"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            <Store className='w-5 h-5' />
                            <span >ALL Products</span>
                        </Link>

                        <Link href={"/"} className='flex py-2 hover:bg-gray-200 px-4 items-center gap-2'>
                            < LogOut className='w-5 h-5' />
                            <span >Logout</span>
                        </Link>
                    </main>
                </div>
            </section >
        </>
    )
}

export default Sidebar

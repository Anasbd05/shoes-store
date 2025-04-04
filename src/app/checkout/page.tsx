"use client"
import {BadgeCheck,BaggageClaim,ShoppingCart,Truck,Wallet} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useCart} from 'react-use-cart'

const CheckoutPage = () => {

    const {items,cartTotal} = useCart()

    const Total = cartTotal - 20

    return (
        <section className='w-11/12 mx-auto my-7'>
            <main className="flex w-full gap-4">
                <div className='flex flex-col w-3/4 gap-4'>
                    {/* methode paiement */}
                    <div className="flex flex-col gap-3 bg-gray-50 rounded-md p-4">
                        <div className="flex gap-2 items-center">
                            <Wallet />
                            <h1 className='text-2xl font-bold font-header'>Paiement Method</h1>
                        </div>
                        <div className="flex flex-col border-2 border-accent rounded-md p-4">
                            <div className="flex w-full items-center justify-between">
                                <h2 className='text-xl font-bold font-header'>Paiement on shipping </h2>
                                <BadgeCheck className='text-accent h-6 w-6' />
                            </div>
                            <p className='text-gray-600 '>Paiement will be taken after shipping</p>
                        </div>
                    </div>


                    {/* {Shipping address} */}
                    <main className='flex flex-col gap-3 bg-gray-50 rounded-md p-4'>
                        <div className="flex gap-2 items-center">
                            <Truck />
                            <h1 className='text-2xl font-bold font-header'>Shipping address</h1>
                        </div>
                        <div className='flex w-full gap-4'>
                            <input type="text" placeholder='First_Name *' className='w-2/4 py-3 px-3 rounded-md  border-none outline-none border-[0.5px] border-neutral-100 bg-white shadow-md placeholder:text-xs' />
                            <input type="text" placeholder='Last_Name *' className='w-2/4 py-3 px-3 rounded-md  border-none outline-none border-[0.5px] border-neutral-100 bg-white shadow-md placeholder:text-xs' />
                        </div>
                        <input type="text" placeholder='City *' className=' py-3 px-3 border-none rounded-md  outline-none border-[0.5px] border-neutral-100 bg-white shadow-md placeholder:text-xs' />
                        <input type="text" placeholder='Address *' className=' py-3.5 px-3 border-none  rounded-md outline-none border-[0.5px] border-neutral-100 bg-white shadow-md placeholder:text-xs' />
                        <input type="text" placeholder='Phone number *' className=' py-3.5 px-3 border-none  rounded-md outline-none border-[0.5px] border-neutral-100 bg-white shadow-md placeholder:text-xs' />

                    </main>
                    {/* Commande checking */}

                    <main className='flex flex-col gap-3 bg-gray-50 rounded-md p-4'>
                        <div className="flex gap-2 items-center">
                            <ShoppingCart />
                            <h1 className='text-2xl font-bold font-header'>Commande checking</h1>
                        </div>
                        <div className="flex flex-col gap-1">
                            {items.map((shoe) => (
                                <div key={shoe.id} className="flex border-b border-neutral-200 justify-between w-full items-center">
                                    <Image className='w-20 h-20' src={shoe.image} alt='' />
                                    <div className="flex flex-col ">
                                        <h3 className='font-bold '>{shoe.title}</h3>
                                        <small>Size: 42</small>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className='font-mono'>{shoe.price}DH</p>
                                        x
                                        <small className='text-base'>{shoe.quantity}</small>
                                    </div>
                                    <p className='text-accent font-mono '>{shoe.itemTotal} DH</p>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
                {/* {caisse } */}
                <main className='w-1/4 ml-auto h-60 rounded-md p-4 border-2 border-black'>
                    <div className="flex gap-2 mb-4 items-center">
                        <BaggageClaim />
                        <h1 className='text-2xl font-bold font-header'>Caisse</h1>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <h2>Subtotal</h2>
                        <small>{cartTotal} DH</small>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <h2>Shipping</h2>
                        <small>0 DH</small>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <h2>Discount</h2>
                        <small>20 DH</small>
                    </div>
                    <div className='flex w-full my-1 justify-between items-center'>
                        <h2 className='font-bold text-lg'>Total</h2>
                        <small className='font-semibold'>{Total} DH</small>
                    </div>
                    <Link href={"checkout"} className='flex justify-center bg-black text-white py-1.5 px-6 my-3 hover:opacity-80 cursor-pointer rounded-sm w-28'>
                        Buy Now
                    </Link>
                </main>
            </main>


        </section>
    )
}

export default CheckoutPage

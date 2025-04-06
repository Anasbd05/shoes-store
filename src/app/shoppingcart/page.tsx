"use client"
import {Minus,Plus,Trash} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useCart} from 'react-use-cart'

const Shopping = () => {

    const {items,cartTotal,removeItem,updateItemQuantity,isEmpty} = useCart();
    const Total = cartTotal - 20

    return (
        <section className='my-10 w-4/6 mx-auto'>
            {isEmpty ? <div className='w-full flex flex-col gap-2 h-[400px] items-center justify-center '>
                <h1 className='font-header text-2xl sm:text-3xl  text-center font-bold'>OOOOPS! YOUR CART IS EMPTY</h1>
                <Link className='w-36 py-2 bg-black text-white rounded-lg flex items-center justify-center' href={"/shoes"}>GO SHOP</Link>
            </div> : <>
                <h1 className='text-center text-4xl font-bold font-header'>Your cart</h1>
                <div className="flex flex-col mt-8 gap-4">
                    {items.map((shoe) => (
                        <main key={shoe.id} className="flex flex-col md:flex-row border-b border-neutral-300 py-2  w-full justify-between gap-5">
                            <div className="flex gap-2 justify-between ">
                                <Image className='w-24 h-24' src={shoe.image} alt='' />
                                <div className="flex flex-col">
                                    <h1 className='font-bold'>{shoe.title}</h1>
                                    <div className="flex mt-1 flex-col">
                                        <p>Size :{shoe.size}</p>
                                        <small className='font-mono text-base font-semibold text-accent'>{shoe.price}DH</small>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center w-full md:max-w-fit justify-center md:justify-between">
                                <div className="flex items-center gap-2 bg-gray-100 h-10 rounded-lg px-2 py-2">
                                    <Minus onClick={() => updateItemQuantity(shoe.id,(shoe.quantity ?? 0) - 1)} className='hover:text-accent' />
                                    <span className='text-lg font-semibold'>{shoe.quantity} </span>
                                    <Plus onClick={() => updateItemQuantity(shoe.id,(shoe.quantity ?? 0) + 1)} className='hover:text-accent' />
                                </div>
                                <Trash onClick={() => removeItem(shoe.id)} className='hover:text-red-500 cursor-pointer' />
                            </div>
                        </main>
                    ))}
                </div>
                <main className=" w-3/4 md:w-2/5 ml-auto mt-6">
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
                        Checkout
                    </Link>
                </main>
            </>
            }

        </section>
    )
}

export default Shopping

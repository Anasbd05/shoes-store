"use client"
import React,{useEffect,useState} from 'react'
import {shoes} from "../../assets/assets"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/home/Footer'

const ShoesPage = () => {
    const [shoeSearch,setShoeSearch] = useState("")
    const [sortPrice,setSortPrice] = useState([...shoes])

    useEffect(() => {
        setSortPrice([...shoes].sort((a,b) => a.price - b.price))
    },[])

    const sortShoeByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        const sorted = [...shoes].sort((a,b) =>
            value === "low" ? a.price - b.price : b.price - a.price
        )
        setSortPrice(sorted)
    }

    return (
        <>
            <Navbar />
            <section className='w-full px-1 sm:px-4 my-10'>
                <div className="flex flex-col gap-4 md:flex-row w-full justify-between">
                    <h1 className='text-3xl font-bold font-header'>Explore our shoes</h1>
                    <div className="flex items-center gap-1">
                        <p>Price :</p>
                        <select className='bg-gray-900 text-white py-1 px-4 outline-none rounded-sm'
                            onChange={sortShoeByPrice}>
                            <option value="low">Low To High</option>
                            <option value="high">High To Low</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        value={shoeSearch}
                        onChange={(e) => setShoeSearch(e.target.value)}
                        placeholder='Search...'
                        autoFocus
                        className='w-full md:w-2/5 outline-none ring-1 ring-accent py-1 rounded-lg px-4'
                    />
                </div>

                <main className='grid my-12 gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        sortPrice.filter(
                            (item) =>
                                item.title.toLowerCase().includes(shoeSearch.toLowerCase()) ||
                                item.description.toLowerCase().includes(shoeSearch.toLowerCase())
                        ).map((shoe) => (
                            <div key={shoe.id} className="flex justify-between bg-white shadow-md rounded-lg flex-col">
                                <Image alt={shoe.title} className='h-52 bg-gray-100 brightness-90 rounded-t-lg' src={shoe.image} />
                                <div className="flex w-full px-2 py-4 justify-between">
                                    <h1 className='sm:text-lg font-semibold font-header'>{shoe.title}</h1>
                                    <h3 className='font-bold font-mono text-accent sm:text-lg'>{shoe.price} DH</h3>
                                </div>
                                <p className='mb-2 px-2 text-justify'>{shoe.description}</p>
                                <Link href={`/shoes/${shoe.title.replaceAll(" ","")}`} className='py-1.5 mb-1 text-center font-medium hover:opacity-80 bg-accent rounded-md'>View</Link>
                            </div>
                        ))
                    }
                </main>
            </section>
            <Footer />
        </>
    )
}

export default ShoesPage

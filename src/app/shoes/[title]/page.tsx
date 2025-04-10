'use client'
import {shoes} from '@/assets/assets'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/Navbar'
import RanShoes from '@/components/RanShoes'
import {CheckCheck} from 'lucide-react'
import Image from 'next/image'
import React,{useState} from 'react'
import {toast} from 'react-toastify'
import {useCart} from 'react-use-cart'

interface ShoeDetailsProps {
    params: {
        title: string
    }
}

const ShoeDetails = ({params}: ShoeDetailsProps) => {
    const {title} = React.use(params)
    const selectedShoe = shoes.find(
        (shoe) => shoe.title.replaceAll(' ','') === title
    )

    const [selectedSize,setSelectedSize] = useState<number | null>(null)
    const [selectedImage,setSelectedImage] = useState(selectedShoe?.image)

    const {addItem,removeItem,inCart} = useCart()

    const itemIdWithSize = `${selectedShoe?.id}-${selectedSize}`

    return (
        <>
            <Navbar />
            <section className='my-16 lg:w-10/12 mx-auto'>
                <main className='flex md:flex-row px-4 flex-col gap-4'>
                    <div className='flex flex-col-reverse lg:flex-row md:w-5/6 gap-5'>
                        <div
                            className={`${selectedShoe?.thumbs?.length > 0
                                ? 'flex lg:flex-col flex-row w-full lg:w-1/5 h-full justify-around lg:justify-between py-1 bg-gray-100 lg:py-4 '
                                : ''
                                }`}
                        >
                            {selectedShoe?.thumbs?.slice(0,3).map((thumb) => (
                                <Image
                                    src={thumb.thumbPic}
                                    key={thumb.id}
                                    onClick={() => setSelectedImage(thumb.thumbPic)}
                                    className='w-32 h-24 cursor-pointer'
                                    alt=''
                                />
                            ))}
                        </div>
                        <Image
                            width={550}
                            height={600}
                            className='w-full md:h-96 object-cover'
                            src={selectedImage}
                            alt=''
                        />
                    </div>
                    <div className='flex flex-col md:w-3/6 gap-4'>
                        <h2 className='text-xl font-header font-bold'>
                            {selectedShoe?.title}
                        </h2>
                        <p className='font-bold text-accent text-xl font-mono'>
                            {selectedShoe?.price} DH
                        </p>
                        <div className='flex gap-2'>
                            {selectedShoe?.sizes.map((size) => (
                                <button
                                    onClick={() => setSelectedSize(size)}
                                    className={`border rounded-md py-1 px-4 ${selectedSize === size
                                        ? 'bg-black text-white'
                                        : ''
                                        }`}
                                    key={size}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <p className='text-neutral-700'>
                            {selectedShoe?.longDesc}
                        </p>

                        {selectedSize && inCart(itemIdWithSize) ? (
                            <button
                                onClick={() => removeItem(itemIdWithSize)}
                                className='bg-red-600 text-white cursor-pointer hover:opacity-80 font-bold py-1.5 w-full rounded-md'
                            >
                                Remove from cart
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    if(!selectedSize)
                                        return toast.error("Please select a size")
                                    addItem({
                                        ...selectedShoe,
                                        size: selectedSize,
                                        id: itemIdWithSize,
                                    })
                                }}
                                className='bg-accent text-white cursor-pointer hover:opacity-80 font-bold py-1.5 w-full rounded-md'
                            >
                                Add to cart
                            </button>
                        )}

                        <div className='mt-2 flex items-center '>
                            <CheckCheck className='text-accent w-5 h-5 mx-3' />
                            <small className='text-sm text-neutral-600'>
                                Free shipping
                            </small>
                        </div>
                    </div>
                </main>
                <RanShoes />
            </section>
            <Footer />
        </>
    )
}

export default ShoeDetails

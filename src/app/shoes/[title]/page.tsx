"use client"
import {shoes} from '@/assets/assets'
import RanShoes from '@/components/RanShoes';
import {CheckCheck} from 'lucide-react';
import Image from 'next/image';
import React,{useState} from 'react'

interface ShoeDetailsProps {
    params: {
        title: string;
    };
}
const ShoeDetails = ({params}: ShoeDetailsProps) => {
    const {title} = React.use(params)
    const selectedShoe = shoes.find((shoe) => shoe.title.replaceAll(' ',"") === title)

    const [selectedSize,setSelectedSize] = useState()
    const [selectedImage,setSelectedImage] = useState(selectedShoe?.image)

    return (
        <section className='my-16 lg:w-10/12 mx-auto'>
            <main className="flex md:flex-row px-4 flex-col gap-4">
                <div className="flex flex-col-reverse lg:flex-row md:w-5/6 gap-5">
                    <div className={`${selectedShoe?.thumbs?.length > 0 ? "flex lg:flex-col flex-row w-full lg:w-1/5 h-full justify-around lg:justify-between py-1 bg-gray-100 lg:py-4 " : ""} `}>
                        {selectedShoe?.thumbs?.slice(0,3).map((thumb) => (
                            <Image src={thumb.thumbPic} key={thumb.id} onClick={() => setSelectedImage(thumb.thumbPic)} className='w-32 h-24 ' alt='' />
                        ))}
                    </div>
                    <Image width={550} height={600} className='w-full md:h-96 object-cover' src={selectedImage} alt='' />
                </div>
                <div className="flex flex-col md:w-3/6 gap-4">
                    <h2 className='text-xl font-header font-bold'>{selectedShoe?.title}</h2>
                    <p className='font-bold text-accent text-xl font-mono'>{selectedShoe?.price} DH</p>
                    <div className="flex gap-2">
                        {selectedShoe?.sizes.map((size) => (
                            <button onClick={() => setSelectedSize(size)} className={`border rounded-md py-1 px-4 ${selectedSize === size ? "bg-black text-white" : ""}`} key={size}>{size}</button>
                        ))}
                    </div>
                    <p className='text-neutral-700'>{selectedShoe?.longDesc}</p>
                    <button className='py-2 hover:opacity-80 bg-accent w-full flex justify-center rounded-md'>Add to cart</button>
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

    )
}

export default ShoeDetails

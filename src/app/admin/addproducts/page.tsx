'use client'

import Sidebar from '@/components/Sidebar'
import {supabase} from '@/utils/supabase'
import Image from 'next/image'
import React,{useState} from 'react'
import {toast} from 'react-toastify'

const AddPage = () => {
    const [imageUrls,setImageUrls] = useState<(string | null)[]>([null,null,null,null])

    const handleUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const file = e.target.files?.[0]
        if(!file) return

        const filePath = `public/${file.name}`

        const {data,error} = await supabase.storage
            .from('shoeimages')
            .upload(filePath,file)

        if(error) {
            console.error('Upload Error:',error)
            toast.error("There is an image has been already uploaded" + error.message)
        } else {
            const {data: urlData} = supabase.storage
                .from('shoeimages')
                .getPublicUrl(filePath)

            const newUrls = [...imageUrls]
            newUrls[index] = urlData.publicUrl
            setImageUrls(newUrls)
        }
    }

    return (
        <section className='w-full h-screen flex gap-5'>
            <Sidebar />
            <div className="w-5/6 ml-auto p-5">
                <h1 className='text-3xl font-header font-bold'>Add Products</h1>
                <main className='flex gap-4 flex-col w-3/5 my-8'>
                    {/* Upload Images */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Upload Image</label>
                        <div className="flex gap-2">
                            {[0,1,2,3].map((i) => (
                                <div key={i}>
                                    <label htmlFor={`img${i}`}>
                                        <Image
                                            src={imageUrls[i] || "/upload.png"}
                                            width={100}
                                            height={100}
                                            alt="Upload preview"
                                            className="cursor-pointer object-cover border rounded"
                                        />
                                    </label>
                                    <input
                                        onChange={(e) => handleUpload(e,i)}
                                        type="file"
                                        id={`img${i}`}
                                        hidden
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shoe Name */}
                    <div className="flex flex-col">
                        <label className='text-gray-700'>Shoe name</label>
                        <input
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="text"
                        />
                    </div>

                    {/* Shoe Description */}
                    <div className="flex flex-col">
                        <label className='text-gray-700'>Shoe description</label>
                        <input
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="text"
                        />
                    </div>

                    {/* Shoe Price */}
                    <div className="flex flex-col w-1/4">
                        <label className='text-gray-700'>Shoe Price</label>
                        <input
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="number"
                        />
                    </div>

                    {/* Shoe Sizes */}
                    <div className="flex-col flex mt-3">
                        <label className='text-gray-700'>Shoe sizes</label>
                        <div className="flex gap-2">
                            {[38,39,40,41,42,43,44].map(size => (
                                <button key={size} className='bg-black h-10 w-10 text-white'>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className='bg-accent text-white py-2 w-32 rounded-sm'>
                        Add Now
                    </button>
                </main>
            </div>
        </section>
    )
}

export default AddPage

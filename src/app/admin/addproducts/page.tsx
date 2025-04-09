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
            console.log(data)
            const {data: urlData} = supabase.storage
                .from('shoeimages')
                .getPublicUrl(filePath)

            const newUrls = [...imageUrls]
            newUrls[index] = urlData.publicUrl
            setImageUrls(newUrls)
        }
    }

    const [Title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState()
    const [sizes,setSizes] = useState([38,39,40,41,42,43,44])

    const AddShoes = async () => {
        try {
            const {error} = await supabase
                .from('addshoes')
                .insert({
                    title: Title,
                    description: description,
                    price: price,
                    sizes: sizes,
                    images: imageUrls
                })
            if(error) {
                toast.error(error.message)
                console.log(error)
            } else {
                toast.success("Shoe add to the store")
            }
        } catch(error) {
            console.log(error)
        }
        finally {
            setTitle('')
            setDescription('')
            setPrice("")
            setImageUrls([])
        }
    }

    return (
        <section className='w-full h-screen flex gap-5'>
            <Sidebar />
            <div className="w-full lg:w-4/5 lg:ml-auto p-5">
                <h1 className='text-3xl font-header font-bold'>Add Products</h1>
                <main className='flex gap-4 flex-col w-full lg:w-4/5 my-8'>
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

                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="text"
                        />
                    </div>

                    {/* Shoe Description */}
                    <div className="flex flex-col">
                        <label className='text-gray-700'>Shoe description</label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="text"
                        />
                    </div>

                    {/* Shoe Price */}
                    <div className="flex flex-col w-1/4">
                        <label className='text-gray-700'>Shoe Price</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder='Type Here!'
                            className='py-1.5 px-3 border border-gray-400 rounded-sm'
                            type="number"
                        />
                    </div>

                    {/* Shoe Sizes */}
                    <div className="flex-col flex mt-3">
                        <label className='text-gray-700'>Shoe sizes</label>
                        <div className="flex gap-2">
                            {sizes.map(size => (
                                <button key={size} className='bg-black h-10 w-10 text-white'>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button onClick={AddShoes} className='bg-accent text-white py-2 w-32 rounded-sm'>
                        Add Now
                    </button>
                </main>
            </div>
        </section>
    )
}

export default AddPage

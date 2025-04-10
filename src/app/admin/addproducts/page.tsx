/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Sidebar from '@/components/Sidebar'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
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
    const [selectedSizes,setSelectedSizes] = useState([])

    const AddShoes = async () => {
        try {
            const {error} = await supabase
                .from('addshoes')
                .insert({
                    title: Title,
                    description: description,
                    price: price,
                    sizes: selectedSizes,
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

    console.log(selectedSizes)

    return (
        <section className='w-full h-screen flex flex-row-reverse lg:flex-row gap-5'>
            <Sidebar />
            <div className="w-full lg:w-4/5 mt-8 lg:mt-0 lg:ml-auto p-5">
                <h1 className='text-3xl font-header font-bold'>Add Products</h1>
                <main className='flex gap-4 flex-col w-full lg:w-4/5 my-8'>
                    {/* Upload Images */}
                    <div className="flex flex-col">
                        <Label className='mb-1' >Upload Image</Label>
                        <div className="flex gap-2">
                            {[0,1,2,3].map((i) => (
                                <div key={i}>
                                    <Label htmlFor={`img${i}`}>
                                        <Image
                                            src={imageUrls[i] || "/upload.png"}
                                            width={100}
                                            height={100}
                                            alt="Upload preview"
                                            className="cursor-pointer object-cover border rounded"
                                        />
                                    </Label>
                                    <Input
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
                        <Label className='mb-1' >Shoe name</Label>
                        <Input

                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                    </div>

                    {/* Shoe Description */}
                    <div className="flex flex-col">
                        <Label className='mb-1' >Shoe description</Label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='h-40 py-1 ring px-3 ring-gray-100 shadow-sm rounded-md'
                        />
                        <small className='text-red-500 text-xs place-self-end'>Max 200 letter </small>
                    </div>

                    {/* Shoe Price */}
                    <div className="flex flex-col w-1/4">
                        <Label className='mb-1' >Shoe Price</Label>
                        <Input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                        />
                    </div>

                    {/* Shoe Sizes */}
                    <div className="flex-col flex mt-3">
                        <Label className='mb-1' >Shoe sizes</Label>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <Button onClick={() => setSelectedSizes(size)} key={size}  >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button className='mb-4' onClick={AddShoes}>
                        Add Now
                    </Button>
                </main>
            </div>
        </section>
    )
}

export default AddPage

'use client'
import React,{useState} from 'react'
import {shoes} from '@/assets/assets'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import {Input} from '@/components/ui/input'

const AllProducts = () => {
    const [search,setsearch] = useState('')

    return (
        <section className='w-full h-screen flex flex-row-reverse lg:flex-row gap-5'>
            <Sidebar />
            <div className="lg:w-4/5 w-full mt-8 lg:mt-0 ml-auto p-5 overflow-auto">
                <div className="flex flex-col md:flex-row justify-between w-full md:items-center">
                    <h1 className='text-3xl font-header font-bold'>Orders</h1>
                    <Input
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                        placeholder='Search Shoe...'
                        className='w-full my-1 md:w-2/4'
                    />
                </div>

                <div className="mt-8 overflow-auto max-w-full">
                    <Table className='min-w-[800px]'>
                        <TableCaption>List of all shoes in the store.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Shoe Image</TableHead>
                                <TableHead>Shoe Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {shoes
                                .filter((item) =>
                                    item.title.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((shoe) => (
                                    <TableRow key={shoe.id}>
                                        <TableCell className="font-medium">
                                            <Image
                                                src={shoe.image}
                                                className="w-20 h-20 brightness-90 object-cover"
                                                alt={shoe.title}
                                                width={80}
                                                height={80}
                                            />
                                        </TableCell>
                                        <TableCell>{shoe.title}</TableCell>
                                        <TableCell className='font-mono font-semibold'>{shoe.price}</TableCell>
                                        <TableCell className='text-right'>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <button className='py-1.5 px-3 text-white cursor-pointer hover:bg-red-400 bg-red-600 rounded-md'>Delete</button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            This action will permanently delete the product.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel className='hover:bg-black hover:text-white duration-500'>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction>
                                                            Delete
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default AllProducts

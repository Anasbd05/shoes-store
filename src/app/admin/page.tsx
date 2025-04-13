'use client'

import Sidebar from '@/components/Sidebar'
import React,{useEffect,useState} from 'react'
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
import {toast} from 'react-toastify'
import {supabase} from '@/utils/supabase'

interface Shoe {
    title: string
    quantity: number
    size: string
}

interface Order {
    id: number
    user: string
    order: Shoe[]
    number: number
    city: string
    address: string
    total: number
}

const AdminPage = () => {
    const [Orders,setOrders] = useState<Order[]>([])

    const FetchOrders = async () => {
        try {
            const {data,error} = await supabase
                .from('shoes')
                .select("*")
            if(data) {
                setOrders(data as Order[])
            } else {
                toast.error(error.message)
            }
        } catch(error) {
            console.log(error)
        }
    }

    const handleDelete = async (id: number) => {
        const {error} = await supabase
            .from('shoes')
            .delete()
            .eq('id',id)

        if(error) {
            toast.error("Failed to delete order")
        } else {
            toast.success("Order deleted")
            FetchOrders()
        }
    }

    useEffect(() => {
        FetchOrders()
    },[])

    return (
        <section className='w-full h-screen flex flex-row-reverse lg:flex-row gap-5'>
            <Sidebar />
            <div className="lg:w-4/5 ml-auto p-5 overflow-auto">
                <h1 className='text-3xl font-header font-bold'>Orders</h1>
                <div className="mt-8 overflow-auto max-w-full">
                    <Table className='min-w-[900px]'>
                        <TableCaption>A list of customer orders.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Shoes</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead>Number</TableHead>
                                <TableHead>City</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.user}</TableCell>
                                    <TableCell>
                                        {order.order.map((shoe) => `${shoe.title} * ${shoe.quantity} `).join(", ")}
                                    </TableCell>
                                    <TableCell>
                                        {order.order.map((shoe) => shoe.size).join(", ")}
                                    </TableCell>
                                    <TableCell>0{order.number}</TableCell>
                                    <TableCell>{order.city}</TableCell>
                                    <TableCell>{order.address}</TableCell>
                                    <TableCell className='font-mono font-semibold'>{order.total}DH</TableCell>
                                    <TableCell className='text-right'>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <button className='py-1.5 px-3 text-white cursor-pointer hover:bg-red-400 bg-red-600 rounded-md'>Delete</button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action will permanently delete the order.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel className='hover:bg-black hover:text-white duration-500'>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => handleDelete(order.id)}
                                                        className='bg-red-600 hover:bg-red-400'
                                                    >
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

export default AdminPage

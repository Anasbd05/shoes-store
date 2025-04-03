import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {FacebookIcon,HeartIcon,Instagram,Twitter} from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-10 py-10  flex flex-col">
            <section className="flex flex-col gap-4 py-6 md:flex-row justify-between items-start px-12">
                <div className="flex flex-col gap-3 ">
                    <h1 className="font-bold text-4xl font-header tracking-wide text-accent">
                        Air<span className='text-black'>talee</span>
                    </h1>
                    <p className='text-gray-700 max-w-xl'>
                        Explore our diverse range of aromas that complement every mood and personality.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className='font-header font-bold text-lg'>Contact Us</h1>
                    <div className="flex gap-6">
                        <Link target='_blank' href={"https://www.tiktok.com/@ismsab0"}>
                            <Image src={"/tiktok.png"} width={30} height={30} className='w-9 h-9 ' alt='' />
                        </Link>
                        <Link target='_blank' href={"https://www.instagram.com/ismaelsabry?igsh=bGYwb2x6N2g3YXNk"}>
                            <Instagram className='text-red-500  w-9 h-9 text-4xl' />
                        </Link>
                        <Link target='_blank' href={"https://www.facebook.com/profile.php?id=61550476321065"}>
                            <FacebookIcon className='text-blue-600 w-9 h-9 text-3xl' />
                        </Link>
                        <Link target='_blank' href={"https://www.facebook.com/profile.php?id=61550476321065"}>
                            <Twitter className='text-blue-400 w-9 h-9 text-3xl' />
                        </Link>
                    </div>
                </div>
            </section>
            <hr className='border-none h-0.5 w-full bg-neutral-700' />
            <div className="flex items-center justify-center pt-5 gap-1">
                <p className='text-center'> Made with</p>
                <HeartIcon className='text-red-600' fontSize='medium' />
                by
                <Link href={"https://www.instagram.com/vnas_trying/"} target='_blank' className='text-blue-500'>Anas_bd</Link>

            </div>
        </footer>
    )
}

export default Footer

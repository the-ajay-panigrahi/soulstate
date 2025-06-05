import { Fugaz_One } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Header() {
    return (
        <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
            <Link href={"/"}><h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>Soul State</h1></Link>
            <div className='flex items-center justify-between'>PLACEHOLDER</div>
        </header>
    )
}

import { Fugaz_One } from 'next/font/google'
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Header() {
    return (
        <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
            <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>Soul State</h1>
            <div className='flex items-center justify-between'>PLACEHOLDER</div>
        </header>
    )
}

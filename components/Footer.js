import { Fugaz_One } from 'next/font/google'
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Footer() {
    return (
        <footer className='p-4 sm:p-8  grid place-items-center'>
            <p className={"text-indigo-500 " + fugaz.className}>&copy; {new Date().getFullYear()} Soul State · Your mood, your journey.</p>
        </footer>
    )
}

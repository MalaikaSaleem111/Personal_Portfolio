

import Link from "next/link";


export default function Navbar(){

    return(
        <nav className="flex justify-between items-center h-20 w-full bg-black px-5">
            <div className="text-xl font-medium">Malaika</div>
            <ul className= "gap-14 lg:gap-16 px-5 md:flex md:item-center text-lg ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>


    
        </nav>
    )
}
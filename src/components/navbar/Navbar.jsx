import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="text-preset-bright bg-blue-950 mx-3 md:mx-5 rounded-bl-xl rounded-br-xl">
            <ul className='flex justify-between items-center mx-3'>
                <div className='bg-preset-bright my-2 py-1 px-3 rounded-md shadow-lg shadow-black'>
                    <h1 className='bg-gradient-to-r from-blue-600 to-teal-700 text-sm md:text-2xl font-bold bg-clip-text text-transparent'>
                        <Link href='/'>
                            CURHAT-IN
                        </Link>
                    </h1>
                </div>
                <li className='flex items-center gap-2 md:gap-3 text-lg font-semibold font-sans'>
                    <Link href='#'
                        className='hover:text-preset-secondary ease-in-out transform transition-all'
                    >
                        Home
                    </Link>
                    <Link href='#'
                        className='hover:text-preset-secondary ease-in-out transform transition-all'
                    >
                        Consult
                    </Link>
                    <Link href='#'
                        className='hover:text-preset-secondary ease-in-out transform transition-all'
                    >
                        Ratings
                    </Link>
                    <div className='bg-gradient-to-tr from-blue-600 to-teal-400 rounded-md py-1 px-2 hover:bg-none hover:border ease-in-out transform transition-all'>
                        <Link href='#'
                            className=''
                        >
                            Login
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
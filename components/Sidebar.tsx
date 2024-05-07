'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link 
                href='/'
                className='mb-5 mr-4 cursor-pointer items-center gap-1 flex flex-center'
            >
                <Image 
                    src='/icons/neo_spring.png'
                    width={50}
                    height={50}
                    alt='Neo Spring Banking Logo'
                    className='size-[100px]'
                />
                <h1 className='sidebar-logo'>
                    NeoSpring
                </h1>
            </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
                        >
                            <div className='relative size-6'>
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <p className={cn('sidebar-label', {
                                '!text-white': isActive
                            })}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                USER
        </nav>
            FOOTER
    </section>
  )
}

export default Sidebar
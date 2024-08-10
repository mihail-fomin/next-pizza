import { cn } from '@/lib/utils'
import React from 'react'
import Container from './Container'
import Image from 'next/image'

type Props = {
  className: string
}

function Header({className}: Props) {
  return (
    <header className={cn('', className)}>
      <Container className='flex items-center justify-center py-8'>
        <div>
          <Image src='/logo.png' alt='Logo/' width={35} height={35} />
          <div>
            <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
            <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
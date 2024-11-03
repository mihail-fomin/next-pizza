'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

type Props = {
  className?: string
}

const categories: { id: number; name: string }[] = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Завтраки' },
  { id: 3, name: 'Десерты' },
  { id: 4, name: 'Комбо' },
  { id: 5, name: 'Закуски' },
  { id: 6, name: 'Коктейли' },
  { id: 7, name: 'Десерты' },
  { id: 8, name: 'Кофе' },
]
const Categorites = ({ className}: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map(({name, id}, index) => (
          <a 
            key={index}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
            )} 
            href={`/#${name}`}
          >
            <button>
              {name}
            </button>
          </a>
        ))
      }
    </div>
  )
}

export default Categorites
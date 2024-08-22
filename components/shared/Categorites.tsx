import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  className?: string
}

const categories = ['Пицца', 'Салаты', 'Десерты', 'Комбо', 'Закуски', 'Коктейли', 'Десерты', 'Кофе']
const activeIndex = 0

const Categorites = ({ className}: Props) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map((category, index) => (
          <a className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            index === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary',
          )} key={index}>
            <button>
              {category}
            </button>
          </a>
        ))
      }
    </div>
  )
}

export default Categorites
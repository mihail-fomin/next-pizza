import Link from 'next/link'
import React from 'react'
import { Title } from './Title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div>
      <Link href = {`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg w-[260px] h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name}/>
        </div>

        <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>

        <p className='text-sm text-gray-400'>
          Ципленок, моцарелла, серы чеддер и пармезан
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-xl'>
            от <b>{price}</b> руб.
          </span>

          <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
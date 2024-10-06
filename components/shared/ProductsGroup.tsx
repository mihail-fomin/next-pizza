import React from 'react'
import { Title } from './Title';
import { cn } from '@/lib/utils';

type Props = {
  id: string;
  title: string;
  items: any[];
  className?: string;
  listCassName: string;
}

const ProductsGroup = (props: Props) => {
  return (
    <div className={props.className}>
      <Title text={props.title} size='lg' className=''/>

      <div className={cn('grid grid-cols-3 gap-[50px]', props.listCassName)}>
        items
      </div>
    </div>
  )
}

export default ProductsGroup
'use client'

import React from 'react'
import { Title } from './Title';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

type Props = {
  title: string;
  items: ProductItem[];
  categoryId: number;
  className?: string;
  listCassName: string;
}

type ProductItem = {
  id: number;
  name: string;
  price: number;
  items: Array<{price: number}>
  imageUrl: string;
}

const ProductsGroup = (props: Props) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(props.categoryId)
    }
  }, [props.categoryId, intersection?.isIntersecting, props.title])

  return (
    <div
      className={props.className}
      id={props.title}
      ref={intersectionRef}
    >
      <Title text={props.title} size='lg' className=''/>

      <div className={cn('grid grid-cols-3 gap-[50px]', props.listCassName)}>
        {props.items.map((product, index) => (
          <ProductCard 
            key={index}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsGroup
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

function ProductPage({ params: { id }}: Props) {
  return (
    <div>{id}</div>
  )
}

export default ProductPage
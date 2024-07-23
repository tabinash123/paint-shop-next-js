import React from 'react'
import ProductDisplay from './ProductDisplay'
import Blog from '../Blog'
import PaintProcessFlow from '../About/PaintProcessFlow'

const ProductPage = () => {
  return (
    <>
      <ProductDisplay />
      <PaintProcessFlow />
      <Blog />
    </>
  )
}

export default ProductPage
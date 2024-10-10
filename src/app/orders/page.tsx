import React from 'react'
import OrderPage from './Order'

const page = () => {
    const products = [
        {
          id: 1,
          name: 'Elegant Chair',
          price: 50.0,
          colors: ['#FF5733', '#C70039', '#900C3F'],
          image: '/images/chair1.jpg',
        },
        {
          id: 2,
          name: 'Modern Sofa',
          price: 250.0,
          colors: ['#FFC300', '#DAF7A6'],
          image: '/images/sofa.jpg',
        },
      ];
  return (
    <div>
        <OrderPage products={products} />
    </div>
  )
}

export default page
import { Typography } from '@material-tailwind/react'
import Cards from "../components/Cards/Cards";
import React from 'react'

const productsArr = [
    {
      id:"product1",
      title: 'White Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id:"product2",
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id:"product3",
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      id:"product4",
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }

  ]

function Store() {
    return (
        <>
            <div className="h-52 flex items-center justify-center bg-blue-gray-900">
                <Typography variant='h1' className='text-7xl text-white'>
                    The Generics
                </Typography>
            </div>
            <div className="w-full flex items-start justify-between flex-wrap">
                {
                    productsArr.map((products) => {
                        return (
                            <Cards key={products.id} products={products} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Store
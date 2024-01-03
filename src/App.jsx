import React from 'react'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import { Typography } from '@material-tailwind/react'

function App() {
  const productsArr = [
    {
      title: 'White Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }

  ]
  return (
    <div className="w-full min-h-dvh bg-gray-200">
      <Header/>
      <div className="h-52 flex items-center justify-center bg-blue-gray-700">
        <Typography variant='h1' className='text-7xl text-white'>
          The Generics
        </Typography>
      </div>
      <div className="w-full flex items-start justify-between flex-wrap">
        {
          productsArr.map((products, index) => {
            return (
              <Cards key={index} products={products}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
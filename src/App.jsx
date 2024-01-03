import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Store
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </a>
      </Typography>
    </ul>
  );
}
function App() {
  const productsArr = [

    {
    
    title: 'Colors',
    
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
    <div className="w-full min-h-dvh">
      <Navbar className="mx-auto px-6 py-3 max-w-full rounded-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            The Generics
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
          >
            {/* <XMarkIcon className="h-6 w-6" strokeWidth={2} /> */}
          </IconButton>
        </div>
        <Collapse >
          <NavList />
        </Collapse>
      </Navbar>
      <div className="h-52 flex items-center justify-center bg-blue-gray-700">
        <Typography variant='h1' className='text-7xl text-white'>
          The Generics
        </Typography>
      </div>
      <div className="w-full flex items-start mt-6 justify-between flex-wrap">
        {
          productsArr.map((products,index) =>{
            return(
              <Card className="mt-6 w-72" key={index}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={products.imageUrl}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            {products.title}
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
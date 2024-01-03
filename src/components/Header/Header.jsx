import React, { useState } from 'react'
import { ShoppingCartIcon} from "@heroicons/react/24/solid"
import { Navbar, Typography,IconButton,} from '@material-tailwind/react'
import Cart from '../Cart/Cart';
import { useCartContext } from '../../context/CartContext';

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
function Header() {
  const [openCart, setOpenCart] = useState(false);
  const {cartProductsDetails} =  useCartContext();

  const totalQuantity = cartProductsDetails.reduce((initialQuantity, products) =>{
    return initialQuantity += products.quantity;
  },0)

  return (
    <>
      {
        <Cart openCart={openCart} setOpenCart={setOpenCart}/>
      }
      <Navbar className="sticky top-0 left-0 z-10 mx-auto px-6 py-3 max-w-full rounded-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5"
          >
            The Generics
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent relative"
            ripple={false}
            onClick={() => setOpenCart(!openCart)}
          >
            <ShoppingCartIcon className="h-6 w-6" strokeWidth={2} />
            <span className='absolute top-[-15px] right-[-15px] py-1 px-2 bg-red-600 text-white rounded-full'>{totalQuantity} </span>
          </IconButton>
        </div>
      </Navbar>
    </>
  )
}

export default Header
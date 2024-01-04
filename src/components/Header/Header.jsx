import React, { useState } from 'react'
import { ShoppingCartIcon} from "@heroicons/react/24/solid"
import { Navbar, Typography,IconButton,} from '@material-tailwind/react'
import Cart from '../Cart/Cart';
import { useCartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

function NavList() {

  return (
    <ul className="my-2 flex flex-row gap-2">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/store" className="flex items-center hover:text-blue-500 transition-colors">
          Store
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="/about" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </NavLink>
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
          <div className="lg:block">
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
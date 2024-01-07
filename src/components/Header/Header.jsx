import React, { useState } from 'react'
import { ShoppingCartIcon} from "@heroicons/react/24/solid"
import { Navbar, Typography,IconButton, Button,} from '@material-tailwind/react'
import Cart from '../Cart/Cart';
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
const LOCAL_STORAGE_KEY = "USER_TOKEN";
function NavList() {

  return (
    <ul className="my-2 flex flex-row gap-2 *:p-1 *:font-medium *:text-blue-gray-900">
      <Typography
        as="li"
        variant="small"
      >
        <NavLink to="/" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
      >
        <NavLink to="/store" className="flex items-center hover:text-blue-500 transition-colors">
          Store
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
      >
        <NavLink to="/about" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
      >
        <NavLink to="/contactus" className="flex items-center hover:text-blue-500 transition-colors">
          Contact Us
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
      >
        <NavLink to="/login" className="flex items-center hover:text-blue-500 transition-colors">
          Change Password
        </NavLink>
      </Typography>
    </ul>
  );
}
function Header() {
  const [openCart, setOpenCart] = useState(false);
  const {cartProductsDetails} = useCartContext();
  const {userToken, logOutHandler, setErrMessage, setUserToken} = useAuthContext();
  const Navigate = useNavigate();

  const totalQuantity = cartProductsDetails.reduce((initialQuantity, products) =>{
    return initialQuantity += products.quantity;
  },0)

  async function handleLogOut(){
    try{
      await logOutHandler();
      setUserToken(null);
      localStorage.setItem(LOCAL_STORAGE_KEY,null);
      Navigate("/login");
    }catch(err){
      setErrMessage(err.message);
    }
  }

  return (
    <>
      {
        <Cart openCart={openCart} setOpenCart={setOpenCart}/>
      }
      <Navbar className="sticky top-0 left-0 z-10 mx-auto px-6 py-3 max-w-full rounded-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="span"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5"
          >
            <Link to="/store">
            The Generics
            </Link>
          </Typography>
          <div className="lg:block">
            <NavList />
          </div>
          <div className="">
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent relative"
            ripple={false}
            onClick={() => {
              if(!userToken){
                Navigate("/login")
                return;
              }
              setOpenCart(!openCart)
            }}
          >
            <ShoppingCartIcon className="h-6 w-6" strokeWidth={2} />
            <span className='absolute top-[-15px] right-[-15px] py-1 px-2 bg-red-600 text-white rounded-full'>{totalQuantity} </span>
          </IconButton>
          {
          userToken ? 
          <Button size='sm' className='ml-5' onClick={handleLogOut}>logout</Button> 
          :
          <Button size='sm' className='ml-5' onClick={()=> Navigate("/login")}>log in</Button>
          }
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default Header
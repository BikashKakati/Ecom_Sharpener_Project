import React from 'react'
import Form from '../components/Form/Form'
import { Typography } from '@material-tailwind/react'

function ContactUs() {
  return (
    <>
      <div className="h-52 flex items-center justify-center bg-blue-gray-900">
        <Typography variant='h1' className='text-7xl text-white'>
          Contact Us
        </Typography>
      </div>
      <div className='w-full h-full flex items-center justify-center'>
        <Form />
      </div>
    </>
  )
}

export default ContactUs
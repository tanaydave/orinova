import React from 'react'
import {TbGridDots} from 'react-icons/tb'
import {RiAccountPinCircleFill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className=" flex justify-end pt-6 pr-14">
      <span  className="">Gmail</span>
      <span className="pl-8">Images</span>
      <span className="text-2xl pl-8"><TbGridDots/></span>
      <span className="text-2xl pl-8"><RiAccountPinCircleFill/></span>
      
    </div>
  )
}

export default Navbar

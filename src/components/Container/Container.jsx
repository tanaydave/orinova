import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import SearchIcon from '@mui/icons-material/Search';
import { GrYoutube } from 'react-icons/gr'
import { SiUdemy } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import { TbPlus } from 'react-icons/tb'
import { FaPen } from 'react-icons/fa'
import { HiMicrophone } from 'react-icons/hi'





const Container = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-48">
      <div className="pt-12 pb-12 text-8xl font-normal tracking-tight text-white">
        Google
      </div>
      <div className="w-5/12 pt-2 pb-2 pl-6 rounded-3xl bg-white flex" >
        <span className="text-3xl mr-6"><RxMagnifyingGlass/></span>
        <input type='text' className="w-9/12" placeholder="Search Google or type a URL" />
        <span className="text-2xl pl-32 mr-2"><HiMicrophone/></span>
      </div>
      <div className=' pt-6  grid grid-cols-4 w-4/12 items-center'>
        <div className=" flex flex-col items-center">
          <span className="rounded-3xl bg-slate-50 m-2 text-4xl w-4/12 p-1 flex justify-center "><GrYoutube /></span>
          <span className="rounded-3xl bg-slate-50  w-4/6 p-2 m-1 text-center" >youtube</span>
        </div>
        <div className=" flex flex-col items-center">
          <span className="rounded-3xl bg-slate-50 m-2 text-4xl w-4/12 p-1 flex justify-center"><SiUdemy /></span>
          <span className="rounded-3xl bg-slate-50 w-4/6 p-2 m-1 text-center" >UDemy</span>
        </div>
        <div className=" flex flex-col items-center">
          <span className="rounded-3xl bg-slate-50 m-2 text-4xl w-4/12 p-1 flex justify-center"><BsTwitter /></span>
          <span className="rounded-3xl bg-slate-50 w-4/6 p-2 m-1 text-center" >twitter</span>
        </div>
        <div className=" flex flex-col items-center">
          <span className="rounded-3xl bg-slate-50 m-2 text-4xl w-4/12 p-1 flex justify-center "><TbPlus /></span>
          <span className="rounded-3xl bg-slate-50  p-2 m-1 text-center" >Add Shortcut</span>
        </div>
        <div className="text-l text-white absolute right-9 bottom-8">
          <FaPen />
        </div>




      </div>

    </div>

  )
}

export default Container

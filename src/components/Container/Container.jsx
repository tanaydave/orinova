import React from 'react'
import {RxMagnifyingGlass} from 'react-icons/rx'

const Container = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-48">
      <div className="pt-12 pb-12 text-8xl ">Google</div>
      
      <input type='text' className="w-2/6 pt-2 pb-2 pl-12 rounded-3xl" placeholder=" Search Google or type a URL "/>
    </div>
  )
}

export default Container

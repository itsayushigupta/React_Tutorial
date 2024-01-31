import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#FF")

  return (
    <>
    <div className="w-screen h-full bg-[#2FF] ">
      <div className='text-3xl text-center pt-4 mb-7'>
      Background changer
      </div>
      <img className='ml-4 mb-7 rounded-xl border-4' src='https://media.istockphoto.com/id/1162669873/vector/cute-panda-paws-up-over-wall-panda-face-cartoon-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=sq_TBuYnAppScO_2tdMP3AhHWTlXlHipURnI96HWObY='></img>
      <p className="text-xl pl-4">this site changes the background color</p>
    </div>  
    </>
  )
}

export default App






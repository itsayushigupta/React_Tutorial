import React from 'react'

function Card({username, cardTxt="description"}) {
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
        <img
          src="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">{cardTxt}</p>
        </div>
      </div>
  )
}

export default Card

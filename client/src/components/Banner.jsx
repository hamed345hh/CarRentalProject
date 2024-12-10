import React from 'react'
import banner from '../assets/images/homephoto.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
          <p className="mb-5">
            Find your Dream Car and Rent it for reasonable prices only here!
          </p>
          <button className="btn btn-primary opacity-50">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner

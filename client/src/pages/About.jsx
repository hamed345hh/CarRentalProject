import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Service from '../components/Service'
import about from '../assets/images/aboutphoto.jpg'

const About = () => {
  return (
    <>
      <Hero img={about} pageName="About" />
      <div style={{ textAlign: "center" }}>
        <p>
      Welcome to Rent A Car, your trusted car rental partner in Egypt. Whether you’re navigating the bustling streets of Cairo, enjoying a relaxing getaway on the shores of the Red Sea, or embarking on a cross-country adventure, we are here to make your journey seamless and enjoyable.
      </p>
      <p>
      At Rent A Car, we take pride in offering a wide selection of vehicles to cater to every traveler’s needs. From compact cars for quick city trips to luxury SUVs for ultimate comfort, our fleet is designed to ensure a reliable and convenient experience. Each vehicle is meticulously maintained to provide safety, comfort, and peace of mind on every journey.
      </p>
      <p>
      Our mission is to provide exceptional service with transparent pricing, flexible rental options, and round-the-clock customer support. We believe that renting a car should be simple and stress-free, so you can focus on enjoying your trip.
      </p>
      <p>
      As a proud Egyptian company, we understand the unique needs of both local and international travelers. That’s why we offer convenient pickup and drop-off locations across the country, making it easy for you to start your adventure wherever you are.
      </p>
      <p>
      Discover Egypt on your terms with Rent A Car. Let us help you create memorable journeys and explore the beauty of our country with ease and comfort.
      </p>
      </div>
      <Service />
      <Footer />
    </>
  )
}

export default About

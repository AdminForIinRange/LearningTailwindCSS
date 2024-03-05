import React from 'react'

import PopularProducts from "./HomeCompoents/PopularProducts.jsx";
import SuperQuality from "./HomeCompoents/SuperQuality.jsx";
import Services from "./HomeCompoents/Services.jsx";
import SpecialOffers from "./HomeCompoents/SpecialOffers.jsx";
import CustomerReviews from "./HomeCompoents/CustomerReviews.jsx";
import Subscribe from "./HomeCompoents/Subscribe.jsx";
import Footer from "./HomeCompoents/Footer.jsx";
import Hero from './HomeCompoents/Hero.jsx';
export default function PageDir() {
  return (
    <div className='relative'>

<Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />

    </div>
  )
}

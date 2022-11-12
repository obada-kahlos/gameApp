import React, { useState } from 'react'
import PricingList from '../../component/pricing-list/pricing-list'
import Container from '../../component/shared/container/container'

const Pricing = () => {

  const pricingData = [
    {
      pricingPlan: 'STARTER',
      pricingPrice: '0$',
      time: 'month',
      offers: [
        'Download 5 Games',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
      ]
    },
    {
      pricingPlan: 'BASIC',
      pricingPrice: '29$',
      time: 'month',
      offers: [
        'Download 25 Games',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
      ]
    },
    {
      pricingPlan: 'Professional',
      pricingPrice: '59$',
      time: 'month',
      offers: [
        'Download Unlimited Games',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet.',
      ]
    },
  ]

  return (
    <>
      <Container padding={'120px 90px'}>
        <div className='w-full flex justify-center items-center flex-wrap gap-4'>
          {
            pricingData.map((item, key) => (
              <PricingList
                pricingPlan={item.pricingPlan}
                pricingPrice={item.pricingPrice}
                time={item.time}
                offers={item.offers}
              />
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default Pricing
import React from 'react'
import PricingList from '../../component/pricing-list/pricing-list'
import Container from '../../component/shared/container/container'
import { Title } from '../../component/shared/heading/heading'

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
        <Title> Pricing Plan. </Title>
        <div className='w-full flex justify-center items-center flex-wrap gap-4'>
          {
            pricingData.map((item, key) => (
              <PricingList
                key={key}
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
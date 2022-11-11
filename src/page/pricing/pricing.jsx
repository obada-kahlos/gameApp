import React from 'react'
import PricingList from '../../component/pricing-list/pricing-list'
import Container from '../../component/shared/container/container'

const Pricing = () => {
  return (
    <Container padding={'120px 90px'}>
      <div className='w-full flex justify-center items-center flex-wrap gap-4'>
        <PricingList pricingPlan={'free'} pricingPrice={'0$'} time={'month'} />
        <PricingList pricingPlan={'pro'} pricingPrice={'29$'} time={'month'} />
        <PricingList pricingPlan={'for ever'} pricingPrice={'59$'} time={'month'} />
      </div>
    </Container>
  )
}

export default Pricing
import React from 'react'
import { PricingTable } from '@clerk/react'

const Plan = () => {
  return (
    <div className='max-w-4xl mx-auto z-20 my-28 px-4'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your Plan</h2>
            <p className='text-gray-500 max-w-lg mx-auto mt-2'>
                Start for free and scale up as you grow. Find the perfect plan
                for your content creation needs. Upgrade anytime to unlock more features and capabilities.
            </p>
        </div>
        <div className='mt-14 max-sm:mx-4'>
            <PricingTable />
        </div>
    </div>
  )
}

export default Plan
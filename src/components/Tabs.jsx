import React from 'react'
import Card from './Card'

const Tabs = () => {
  return (
  <div className='flex  mx-auto'>
      <div role="tablist" className="tabs tabs-bordered space-x-10">
    <input  type="radio" name="my_tabs_1" role="tab" className="tab font-bold ml-40 text-blue-800" aria-label="Study" checked/>
    <div role="tabpanel" className="tab-content p-10 justify-center "><Card/></div>
  
    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Quiz"  />
    <div role="tabpanel" className="tab-content p-10"><Card/></div>
  
    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Test" />
    <div role="tabpanel" className="tab-content p-10"><Card/></div>

    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Game" />
    <div role="tabpanel" className="tab-content p-10"><Card/></div>

    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Others" />
    <div role="tabpanel" className="tab-content p-10"><Card/></div>
  </div>
  </div>
  )
}

export default Tabs
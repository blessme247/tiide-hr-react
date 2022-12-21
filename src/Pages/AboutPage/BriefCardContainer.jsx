import React from 'react'
import BriefCardComponent from './BriefCardComponent'

function BriefCardContainer() {
  return (
    <div className='container'>
    <div className='brief-container'>

      <BriefCardComponent
        heading="Who We Are"
        paragraph="Tiide HR is a free digital admistrative solution that comprises employee onboarding, leave,
            role, level and notifications management.
            Everything you need to successfully manage your employees all in one place."
      />

      <BriefCardComponent
        heading="Our Goal"
        paragraph="At Tiide HR, our goal is to make administration and team management easy.
            With our solutions, you can reduce manual handling of your employee records,
             improve  administrative efficiency and also improve employee productivity."
      />

      <BriefCardComponent
        heading="Who We Serve"
        paragraph=" Driven by a strong user research and survey, Tiide HR has been set up to serve small and
             medium scale enterprises on our platform. "
      />

    </div>
    </div>
  )
}

export default BriefCardContainer
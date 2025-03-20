import React from 'react'

function Payments() {
  return (
    <div>Payments

      <p>
      &quot;Dear <span className='text-green-500 font-semibold font-roboto'>Ataur Rahman, </span>  your payment of $500 for checkup on {(new Date()).toLocaleDateString()} has been successfully processed. Transaction ID: 4asf787f67df7. Thank you for choosing <span className='text-cyan-600'> Madicare</span>. For inquiries, contact +099605465246.&quot;
      </p>
    </div>
  )
}

export default Payments
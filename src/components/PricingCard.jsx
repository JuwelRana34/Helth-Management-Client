import React from 'react'
import { HeartIcon, PackageIcon, ZapIcon, CheckCircleIcon, Loader } from 'lucide-react'

const PricingCard = ({loadingButtons,handlePayments, type, title, price, features }) => {
  const getIcon = () => {
    switch (type) {
      case 'basic':
        return <HeartIcon className="w-6 h-6 text-black" />
      case 'premium':
        return <PackageIcon className="w-6 h-6 text-white" />
      case 'family':
        return <ZapIcon className="w-6 h-6 text-black" />
      default:
        return null
    }
  }

  const getBgColor = () => {
    switch (type) {
      case 'basic':
        return 'bg-white'
      case 'premium':
        return 'bg-gradient-to-r from-[#33ccff] to-[#3366ff] '
      case 'family':
        return 'bg-white'
      default:
        return ''
    }
  }

  const getTextColor = () => {
    return type === 'premium' ? 'text-white' : 'text-gray-800'
  }

  const getButtonClass = () => {
    return type === 'premium'
      ? 'bg-white text-gray-800 hover:bg-gray-100'
      : 'bg-[#001d29] text-white hover:bg-[#00293d]'
  }

  const getHoverClasses = () => {
    switch (type) {
      case 'basic':
        return ' hover:scale-105'
      case 'premium':
        return 'hover:bg-gradient-to-r hover:from-[#33ccff] hover:to-[#3366ff] hover:scale-105'
      case 'family':
        return ' hover:scale-105'
      default:
        return ''
    }
  }

  return (
    <div
      className={`rounded-lg p-6 border transition-all duration-300 shadow-xl flex flex-col ${getBgColor()} ${getHoverClasses()}`}
    >
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center mb-4 ${
          type === 'premium' ? 'bg-primary' : 'bg-[#ccff33]'
        }`}
      >
        {getIcon()}
      </div>
      <h3 className={`text-sm font-medium mb-1 ${getTextColor()}`}>{title}</h3>
      <h2 className={`text-5xl font-bold mb-6 ${getTextColor()}`}>{price}</h2>
      <div className={`border-t border-dashed ${type !== "premium"? "border-gray-400" :"border-gray-200" }  w-full mb-6`}></div>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start mb-3">
            <CheckCircleIcon
              className={`w-5 h-5 mr-2 mt-0.5 ${
                type === 'premium' ? 'text-[#ccff33]' : 'text-gray-600'
              }`}
            />
            <p className={`text-sm ${getTextColor()}`}>{feature}</p>
          </div>
        ))}
      </div>
      <button 
       disabled={loadingButtons[type]}
       onClick={()=>handlePayments(type)}
        className={`w-full py-3 px-4 disabled:cursor-not-allowed rounded-lg mt-6 font-medium transition-colors duration-200 ${getButtonClass()}`}
      >
       {loadingButtons[type] ? <div className='flex justify-center items-center gap-2'>
       <Loader className={` ${type !== "premium" ? "text-white" : "text-gray-950"} animate-spin`} size={24} />
       <p>Loading...</p>
       </div>: "Buy now to get access"}
 
      </button>
    </div>
  )
}

export default PricingCard

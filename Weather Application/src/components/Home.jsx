import React, { useState } from 'react'

function Home() {
  const [data, setData] = useState(null)

  const api = "http://api.weatherapi.com/v1/current.json?key=1a89446531354e12af7173117251009&q=London&aqi=no"
  // const api_api = "https://api.weatherapi.com/v1/current.json?key=1a89446531354e12af7173117251009&q=delhi&aqi=yes"

   const FetchData = async() => {
    const res = await fetch(api)
    
    const resdata = res.json() 

    setData(resdata)

    console.log("data ==== ", resdata.value.location);
  }

  return (
    <div className='bg-black h-screen w-full text-gray-300'>
      
      <div className='bg-gray-500 max-h-screen  text-white mx-32 p-10 rounded-4xl'>
               {data?.location?.name}
      </div>

          <button
          className=''
          onClick={FetchData}
          >
            getdata
          </button>
    </div>
  )
}
export { Home } 
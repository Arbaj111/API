import React, { useState } from 'react'

function Home() {

  const [resdata, setResData] = useState({});
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random';
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const FetchData = async() => {

     try {
      const res = await fetch(url, options)
      const result = await res.json();
      setResData(result.data)
 
      console.log(resdata);
      
     } catch (error) {
      
     }

  }
  


  return (
    <div>

        <div className='max-h-screen bg-amber-600 text-black'>


            <h1>gender: {resdata?.gender}</h1>
            <h1>name: {resdata?.name?.title}   {resdata?.name?.first}   {resdata?.name?.last}</h1>
          
            <h1>gender: {resdata?.gender}</h1>
            <h1>name: {resdata?.location?.street?.number}   {resdata?.location?.street?.name}   {resdata?.name?.last}</h1>

            
        </div>






        <button 
        
        className=' border-red-200 border-4 hover:bg-amber-950'
        onClick={FetchData}
        
        >

          fetch data


        </button>
    </div>
  )
}
export { Home } 